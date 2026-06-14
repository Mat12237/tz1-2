const clientRepo = require('../repositories/clientRepository');
const trainerRepo = require('../repositories/trainerRepository');

class ClientService {
  async getAll() {
    return clientRepo.findAll();
  }

  async getById(id) {
    const client = await clientRepo.findById(id);
    if (!client) {
      const err = new Error('Клиент не найден');
      err.status = 404;
      throw err;
    }
    return client;
  }

  async getDetail(id) {
    const client = await clientRepo.findDetailById(id);
    if (!client) {
      const err = new Error('Клиент не найден');
      err.status = 404;
      throw err;
    }

    const { trainer_id, locker_id, trainer, locker, services, ...rest } = client;

    return {
      ...rest,
      trainer: trainer || null,
      locker: locker ? { id: locker.id, number: locker.number } : null,
      services: services.map((item) => ({
        id: item.service.id,
        name: item.service.name,
        price: item.service.price,
      })),
    };
  }

  async create(data) {
    if (data.trainer_id) {
      const trainer = await trainerRepo.findById(data.trainer_id);
      if (!trainer) {
        const err = new Error('Тренер с указанным trainer_id не найден');
        err.status = 404;
        throw err;
      }
    }
    return clientRepo.create(data);
  }

  async update(id, data) {
    await this.getById(id);
    return clientRepo.update(id, data);
  }

  async updateStatus(id, is_active) {
    if (typeof is_active !== 'boolean') {
      const err = new Error('Поле is_active должно быть булевым значением (true/false)');
      err.status = 400;
      throw err;
    }
    await this.getById(id);
    return clientRepo.updateStatus(id, is_active);
  }

  async assignTrainer(clientId, trainerId) {
    await this.getById(clientId);
    const trainer = await trainerRepo.findById(trainerId);
    if (!trainer) {
      const err = new Error('Тренер не найден');
      err.status = 404;
      throw err;
    }
    return clientRepo.assignTrainer(clientId, trainerId);
  }

  async assignLocker(clientId, lockerId) {
    await this.getById(clientId);
    const result = await clientRepo.assignLocker(clientId, lockerId);

    if (result === null) {
      const err = new Error('Клиент не найден');
      err.status = 404;
      throw err;
    }

    if (result.locker === null) {
      const err = new Error('Шкафчик не найден');
      err.status = 404;
      throw err;
    }

    if (result.conflict === 'locker_occupied') {
      const err = new Error('Шкафчик уже занят');
      err.status = 409;
      throw err;
    }

    return result;
  }

  async addService(clientId, serviceId) {
    await this.getById(clientId);
    const result = await clientRepo.addService(clientId, serviceId);

    if (result === null) {
      const err = new Error('Клиент не найден');
      err.status = 404;
      throw err;
    }

    if (result.service === null) {
      const err = new Error('Услуга не найдена');
      err.status = 404;
      throw err;
    }

    if (result.conflict === 'service_exists') {
      const err = new Error('Услуга уже подключена к клиенту');
      err.status = 409;
      throw err;
    }

    return result;
  }
}

module.exports = new ClientService();
