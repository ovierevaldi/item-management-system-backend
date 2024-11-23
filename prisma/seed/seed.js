import db from "../../db.js";
import hashProvider from "../../libs/hash-provider.js";

const { userTable } = db();

const userSeed = {
    createSeed : async () => {
        const user = await userTable.findUnique({
            select: {
                username: true
            },
            where: {
                username: process.env.DEFAULT_ADMIN_ID
            }
        })

        if(user)
            return;
        
        await userTable.create({
            data: {
                username: process.env.DEFAULT_ADMIN_ID,
                password: await hashProvider.hashPassword(process.env.DEFAULT_ADMIN_PASS)
            }
        });
    },
    init: () => {
        return db(userSeed.createSeed)
    }
};

export default userSeed;