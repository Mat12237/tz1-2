const { execSync } = require('child_process');
const path = require('path');

function runMigrations() {
  execSync('npx prisma migrate deploy', {
    cwd: path.join(__dirname, '../..'),
    stdio: 'inherit',
  });
}

module.exports = { runMigrations };
