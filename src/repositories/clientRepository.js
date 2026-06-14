const prisma = require('../db/prisma');

class ClientRepository {
  async findAll() {
    return prisma.client.findMany();
  }

  async findById(id) {
    return prisma.client.findUnique({ where: { id } });
  }

  async create(data) {
    return prisma.client.create({
      data: {
        surname: data.surname,
        name: data.name,
        patronymic: data.patronymic ?? null,
        birthday: data.birthday,
        phone: data.phone,
        email: data.email,
        is_active: data.is_active !== undefined ? data.is_active : true,
        trainer_id: data.trainer_id ?? null,
      },
    });
  }

  async update(id, data) {
    const client = await this.findById(id);
    if (!client) return null;
    return prisma.client.update({
      where: { id },
      data: {
        surname: data.surname ?? client.surname,
        name: data.name ?? client.name,
        patronymic: data.patronymic !== undefined ? data.patronymic : client.patronymic,
        birthday: data.birthday ?? client.birthday,
        phone: data.phone ?? client.phone,
        email: data.email ?? client.email,
      },
    });
  }

  async updateStatus(id, is_active) {
    const client = await this.findById(id);
    if (!client) return null;
    return prisma.client.update({
      where: { id },
      data: { is_active },
    });
  }

  async assignTrainer(clientId, trainerId) {
    const client = await this.findById(clientId);
    if (!client) return null;
    return prisma.client.update({
      where: { id: clientId },
      data: { trainer_id: trainerId },
    });
  }

  async findDetailById(id) {
    return prisma.client.findUnique({
      where: { id },
      include: {
        trainer: true,
        locker: true,
        services: {
          include: {
            service: true,
          },
        },
      },
    });
  }

  async assignLocker(clientId, lockerId) {
    return prisma.$transaction(async (tx) => {
      const client = await tx.client.findUnique({ where: { id: clientId } });
      if (!client) return null;

      const locker = await tx.locker.findUnique({ where: { id: lockerId } });
      if (!locker) return { locker: null };

      if (locker.client_id !== null) {
        return { conflict: 'locker_occupied' };
      }

      if (client.locker_id) {
        await tx.locker.update({
          where: { id: client.locker_id },
          data: { client_id: null },
        });
      }

      await tx.locker.update({
        where: { id: lockerId },
        data: { client_id: clientId },
      });

      return tx.client.update({
        where: { id: clientId },
        data: { locker_id: lockerId },
      });
    });
  }

  async addService(clientId, serviceId) {
    const client = await this.findById(clientId);
    if (!client) return null;

    const service = await prisma.service.findUnique({ where: { id: serviceId } });
    if (!service) return { service: null };

    const existing = await prisma.clientService.findUnique({
      where: {
        client_id_service_id: {
          client_id: clientId,
          service_id: serviceId,
        },
      },
    });

    if (existing) {
      return { conflict: 'service_exists' };
    }

    await prisma.clientService.create({
      data: {
        client_id: clientId,
        service_id: serviceId,
      },
    });

    return client;
  }
}

module.exports = new ClientRepository();
