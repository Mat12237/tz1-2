const lockerRepo = require('../repositories/lockerRepository');

class LockerService {
  async getAll() {
    const lockers = await lockerRepo.findAll();
    return lockers.map((locker) => ({
      id: locker.id,
      number: locker.number,
      client_id: locker.client_id,
      status: locker.client_id ? 'occupied' : 'free',
      client: locker.client || null,
    }));
  }
}

module.exports = new LockerService();
