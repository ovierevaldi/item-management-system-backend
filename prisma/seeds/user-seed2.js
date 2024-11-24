import hashProvider from "../../libs/hash-provider.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const userSeed = {
    createSeed : async () => {
        try {
            const user = await prisma.user.findUnique({
                select: {
                    username: true
                },
                where: {
                    username: process.env.DEFAULT_ADMIN_ID
                }
            });

            if(user)
                return;
            
            await prisma.user.create({
                data: {
                    username: process.env.DEFAULT_ADMIN_ID,
                    password: await hashProvider.hashPassword(process.env.DEFAULT_ADMIN_PASS)
                }
            });
        } catch (error) {
            throw error     
        }
    },
    disconnectErrorPrisma: async () =>{
        console.log("Error on Creating User seed Table");
        await prisma.$disconnect();
    },

    init: async () => {
        try {
            await userSeed.createSeed();
            prisma.$disconnect();
        } catch (error) {
            throw (error);
        }
    }
};

export default userSeed;