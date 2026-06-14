require('dotenv/config');
const path = require('path');
const { PrismaClient } = require('../generated/prisma');
const { PrismaBetterSqlite3 } = require('@prisma/adapter-better-sqlite3');

const databaseUrl = process.env.DATABASE_URL || 'file:./dev.db';
const dbPath = databaseUrl.replace(/^file:/, '');
const resolvedPath = path.isAbsolute(dbPath)
  ? dbPath
  : path.join(__dirname, '../..', dbPath.replace(/^\.\//, ''));

const adapter = new PrismaBetterSqlite3({ url: `file:${resolvedPath}` });
const prisma = new PrismaClient({ adapter });

module.exports = prisma;
