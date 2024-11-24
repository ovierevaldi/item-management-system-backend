import { PrismaClient } from "@prisma/client"

import UserSeed from "./prisma/seeds/user-seed.js";
import ItemSeed from "./prisma/seeds/item-seed.js";

const prisma = new PrismaClient;

const db = () => {
  
  const createSeed = () => {
    const userSeed = new UserSeed('User');
    const itemSeed = new ItemSeed('Item')
    const seeds = [userSeed, itemSeed];

    Promise.allSettled(seeds.map((seed) => seed.init()))
    .then((results) => {
        results.forEach((result, index) =>{
          if(result.status === 'rejected'){
            seeds[index].disconnectErrorPrisma();
            console.log(result.reason)
          }
        })
    })

  }

  return{
    userTable: prisma.user,
    itemTable: prisma.item,
    createSeed
  }
}

export default db;