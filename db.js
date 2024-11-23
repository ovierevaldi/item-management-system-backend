import { PrismaClient } from "@prisma/client"

const db = (overrideFunction = async () => {}) => {
  const prisma = new PrismaClient;

  async function main() {
    try {
        await overrideFunction();        
    } catch (error) {
        console.log(error);
    }
  }

  main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch( async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1)
  });

  return{
    userTable: prisma.user,
    prisma
  }
}

export default db;