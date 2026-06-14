const prisma = require('../db/prisma');

class TrainerRepository {
  async findAll() {
    return prisma.trainer.findMany();
  }

  async findById(id) {
    return prisma.trainer.findUnique({ where: { id } });
  }

  async create(data) {
    return prisma.trainer.create({
      data: {
        surname: data.surname,
        name: data.name,
        patronymic: data.patronymic ?? null,
        phone: data.phone,
        status: data.status ?? 'WORKING',
      },
    });
  }

  async update(id, data) {
    const trainer = await this.findById(id);
    if (!trainer) return null;
    return prisma.trainer.update({
      where: { id },
      data: {
        surname: data.surname ?? trainer.surname,
        name: data.name ?? trainer.name,
        patronymic: data.patronymic !== undefined ? data.patronymic : trainer.patronymic,
        phone: data.phone ?? trainer.phone,
      },
    });
  }

  async updateStatus(id, status) {
    const trainer = await this.findById(id);
    if (!trainer) return null;
    return prisma.trainer.update({
      where: { id },
      data: { status },
    });
  }

  async getClients(trainerId) {
    return prisma.client.findMany({
      where: { trainer_id: trainerId },
    });
  }
}

module.exports = new TrainerRepository();
