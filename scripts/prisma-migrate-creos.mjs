import { spawnSync } from 'node:child_process';

const creosDatabaseUrl = String(process.env.CREOS_DATABASE_URL || '').trim();

if (!creosDatabaseUrl) {
  console.error('CREOS_DATABASE_URL is required to deploy Prisma migrations to creos_ai.');
  process.exit(1);
}

const result = spawnSync(
  'npx',
  ['prisma', 'migrate', 'deploy', '--schema', 'prisma/schema.prisma'],
  {
    stdio: 'inherit',
    env: {
      ...process.env,
      DATABASE_URL: creosDatabaseUrl,
    },
  },
);

if (result.error) {
  console.error(result.error.message);
  process.exit(1);
}

process.exit(result.status ?? 1);
