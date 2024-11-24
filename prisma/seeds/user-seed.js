import hashProvider from "../../libs/hash-provider.js";
import Seed from "./seed.js";

export default class UserSeed extends Seed{
    async createSeed(){
        try {
            const user = await this.prisma.user.findUnique({
                select: {
                    username: true
                },
                where: {
                    username: process.env.DEFAULT_ADMIN_ID
                }
            });

            if(user)
                return;
            
            await this.prisma.user.create({
                data: {
                    username: process.env.DEFAULT_ADMIN_ID,
                    password: await hashProvider.hashPassword(process.env.DEFAULT_ADMIN_PASS)
                }
            });
        } catch (error) {
            throw error     
        }
    }
}