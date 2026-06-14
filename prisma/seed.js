const { v4: uuidv4 } = require('uuid');
const prisma = require('../src/db/prisma');

const services = [
  { id: 'SOLARIUM', name: 'Солярий', price: 400 },
  { id: 'POOL', name: 'Бассейн', price: 200 },
  { id: 'SAUNA', name: 'Сауна', price: 0 },
  { id: 'CRYOSAUNA', name: 'Криосауна', price: 1000 },
  { id: 'CROSSFIT', name: 'Кроссфит', price: 500 },
];

async function main() {
  const serviceCount = await prisma.service.count();
  if (serviceCount === 0) {
    await prisma.service.createMany({ data: services });
  }

  const lockerCount = await prisma.locker.count();
  if (lockerCount === 0) {
    const lockers = Array.from({ length: 20 }, (_, index) => ({
      id: uuidv4(),
      number: index + 1,
      client_id: null,
    }));
    await prisma.locker.createMany({ data: lockers });
  }

  const trainerCount = await prisma.trainer.count();
  if (trainerCount === 0) {
    const t1 = uuidv4();
    const t2 = uuidv4();

    await prisma.trainer.createMany({
      data: [
        {
          id: t1,
          surname: 'Смирнов',
          name: 'Алексей',
          patronymic: 'Игоревич',
          phone: '+79001112233',
          status: 'WORKING',
        },
        {
          id: t2,
          surname: 'Козлова',
          name: 'Марина',
          patronymic: null,
          phone: '+79009998877',
          status: 'ON_LEAVE',
        },
      ],
    });

    await prisma.client.create({
      data: {
        id: uuidv4(),
        surname: 'Иванов',
        name: 'Иван',
        patronymic: 'Иванович',
        birthday: '1990-05-15',
        phone: '+79111234567',
        email: 'ivan@example.com',
        is_active: true,
        trainer_id: t1,
      },
    });
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
