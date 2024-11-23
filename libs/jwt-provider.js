import jwt from 'jsonwebtoken';

const jwtProvider = () => {
    function createJWT(payload){
        return new Promise((resolve, reject) => {
            jwt.sign(payload, process.env.JWT_ACCESS_TOKEN_SECRET, 
                {expiresIn : '15m'}, 
                (err, token) => {
                    if(err){
                        // Some erros when token failed to create
                        console.log('Cannot create JWT');
                        reject(err)
                    }
                    resolve(token)
            });
        })
    }

    function verifyJWT(token){
       return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET, (err, decoded) => {
            if(err){
                console.log('Cannot Decrypt JWT');
                reject(err)
            }
            resolve(decoded)
        })
       })
    }

    return {
        createJWT, verifyJWT
    }
}

export default jwtProvider;