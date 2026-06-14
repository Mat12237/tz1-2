const prisma = require('../db/prisma');

class LockerRepository {
  async findAll() {
    return prisma.locker.findMany({
      orderBy: { number: 'asc' },
      include: {
        client: {
          select: {
            id: true,
            surname: true,
            name: true,
            patronymic: true,
          },
        },
      },
    });
  }

  async findById(id) {
    return prisma.locker.findUnique({ where: { id } });
  }
}

module.exports = new LockerRepository();
