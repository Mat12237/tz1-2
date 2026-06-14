const trainerRepo = require('../repositories/trainerRepository');

const VALID_STATUSES = ['WORKING', 'ON_LEAVE', 'NOT_WORKING'];

class TrainerService {
  async getAll() {
    return trainerRepo.findAll();
  }

  async getById(id) {
    const trainer = await trainerRepo.findById(id);
    if (!trainer) {
      const err = new Error('Тренер не найден');
      err.status = 404;
      throw err;
    }
    return trainer;
  }

  async getDetail(id) {
    const trainer = await this.getById(id);
    const clients = await trainerRepo.getClients(id);
    return { ...trainer, clients };
  }

  async create(data) {
    return trainerRepo.create(data);
  }

  async update(id, data) {
    await this.getById(id);
    return trainerRepo.update(id, data);
  }

  async updateStatus(id, status) {
    if (!VALID_STATUSES.includes(status)) {
      const err = new Error(`Недопустимый статус. Допустимые значения: ${VALID_STATUSES.join(', ')}`);
      err.status = 400;
      throw err;
    }
    await this.getById(id);
    return trainerRepo.updateStatus(id, status);
  }
}

module.exports = new TrainerService();
