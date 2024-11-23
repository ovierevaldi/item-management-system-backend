import db from "../db.js";
import hashProvider from "../libs/hash-provider.js";
import jwtProvider from "../libs/jwt-provider.js";

const { userTable } = db();
const { createJWT } = jwtProvider();

class AuthController {
    static async signIn(user_username, user_password){
        try {
            const user = await userTable.findUnique({
                select: {
                    username: true,
                    password: true
                },
                where: {
                    username: user_username
                }
            });


            if(!user){
                const err = new Error('User Not Found');
                err.statusCode = 404;
                throw err;
            }

            const hashedPass = user.password;
            const isPassMatch = await hashProvider.verifyPassword(hashedPass, user_password);

            if(!isPassMatch){
                const err = new Error('Invalid Credentials');
                err.statusCode = 401;
                throw err;
            };

            const userPayload = {
                username: user.username
            };

            const access_token = await createJWT(userPayload);
        
            return {user: userPayload, access_token: access_token};

        } catch (error) {
            throw error
        }
    }
}

export default AuthController;