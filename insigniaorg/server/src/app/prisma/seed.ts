// eslint-disable-next-line @typescript-eslint/no-var-requires
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // TODO: Seed Workspaces
  const workspace1 = await prisma.workspace.upsert({
    where: { id: '1' },
    update: {},
    create: {
      id: '1',
      name: 'Workspace One',
    },
  });

  const workspace2 = await prisma.workspace.upsert({
    where: { id: '2' },
    update: {},
    create: {
      id: '2',
      name: 'Workspace Two',
    },
  });

  // TODO: Seed Users
  await prisma.user.create({
    data: {
      email: 'mail@gmail.com',
      password: '123456',
      name: 'Yobel',
      role: 'USER',
      workspaceId: workspace1.id,
    },
  });

  await prisma.user.create({
    data: {
      email: 'another@mail.com',
      password: 'abcdef',
      name: 'John Doe',
      role: 'ADMIN',
      workspaceId: workspace2.id,
    },
  });

  console.log('seed success');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
