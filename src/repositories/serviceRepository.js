const prisma = require('../db/prisma');

class ServiceRepository {
  async findAll() {
    return prisma.service.findMany({
      orderBy: { id: 'asc' },
    });
  }

  async findById(id) {
    return prisma.service.findUnique({
      where: { id },
      include: {
        clients: {
          include: {
            client: true,
          },
        },
      },
    });
  }
}

module.exports = new ServiceRepository();
