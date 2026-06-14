require('dotenv/config');
const express = require('express');
const path = require('path');
const { execSync } = require('child_process');
const prisma = require('./db/prisma');
const { runMigrations } = require('./db/migrate');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

async function bootstrap() {
  runMigrations();
  execSync('node prisma/seed.js', {
    cwd: path.join(__dirname, '..'),
    stdio: 'inherit',
  });

  const clientRoutes = require('./routes/clients');
  const trainerRoutes = require('./routes/trainers');
  const lockerRoutes = require('./routes/lockers');
  const serviceRoutes = require('./routes/services');

  app.use('/api/clients', clientRoutes);
  app.use('/api/trainers', trainerRoutes);
  app.use('/api/lockers', lockerRoutes);
  app.use('/api/additionalServices', serviceRoutes);

  app.use('/api', (req, res) => {
    res.status(404).json({ error: `Маршрут ${req.method} ${req.path} не найден` });
  });

  const errorHandler = require('./middleware/errorHandler');
  app.use(errorHandler);

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Сервер запущен: http://localhost:${PORT}`);
  });
}

bootstrap().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});

module.exports = app;
