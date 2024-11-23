import argon2 from "argon2";

const hashProvider = {
    hashPassword: async (password) => {
        try {
            return await argon2.hash(password);
        } catch (error) {
           if(error){
                // Some errors when hashing password;
                console.log('Cannot Hash Password')
           }
        }
    },

    verifyPassword: async (hashedPass, userPass) => {
        const isPassMatch = await argon2.verify(hashedPass, userPass);
        
        if(!isPassMatch){
            // Some errors when decrypt password
            console.log('Cannot Decrypt Password')
        }
        return isPassMatch;
    }
};

export default hashProvider;