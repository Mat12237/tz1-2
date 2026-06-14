const serviceRepo = require('../repositories/serviceRepository');

class ServiceService {
  async getAll() {
    return serviceRepo.findAll();
  }

  async getById(id) {
    const service = await serviceRepo.findById(id);
    if (!service) {
      const err = new Error('Услуга не найдена');
      err.status = 404;
      throw err;
    }

    const { clients, ...rest } = service;

    return {
      ...rest,
      clients: clients.map((item) => {
        const { trainer_id, locker_id, ...client } = item.client;
        return client;
      }),
    };
  }
}

module.exports = new ServiceService();
