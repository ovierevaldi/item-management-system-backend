import passport from "passport";
import {Strategy as LocalStrategy} from 'passport-local';
import AuthController from "../controllers/auth-controller.js";

passport.use(new LocalStrategy(
    async function(username, password, done) {
        try {
            const user = await AuthController.signIn(username, password);
            done(null, user);

        } catch (error) {
            done(error, false);          
        }
    }
));

const passportProvider = {
    signIn : (req, res, next) => {
        passport.authenticate('local', {session: false}, (err, user, info) => {
            if(err){
                return res.status(err.statusCode).json({message: err.message, statusCode: err.statusCode});
            }
            res.status(200).json(user)

        })(req, res, next)
    }    
}

export {passport, passportProvider};