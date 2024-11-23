import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from './routes/user-route.js';
import userSeed from './prisma/seed/seed.js';
import authRouter from './routes/auth.route.js'

const envFile = process.env.NODE_ENV === 'production' ? '.env' : '.env.development';
dotenv.config({path: envFile});

const app = express()
const port = process.env.PORT || 3001;

userSeed.init();

const corsOptions = {
  origin: 'http://localhost:4500/'
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/user', userRouter);
app.use('/auth', authRouter);

app.get('/', (req, res) => {
  res.send('Backend!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}. mode: ${process.env.NODE_ENV}`)
})