import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import apiRouter from './routes/api.route.js';
import db from './db.js';
import checkBodyParser from './middleware/check-body-parser.js';

const envFile = process.env.NODE_ENV === 'production' ? '.env' : '.env.development';
dotenv.config({path: envFile});

const app = express()
const port = process.env.PORT || 3001;

// Create default seed for testing
db().createSeeds()

const corsOptions = {
  origin: 'http://localhost:4500'
};
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Handle body parser error
app.use(checkBodyParser);

app.use('/api', apiRouter);

app.get('/', (req, res) => {
  res.send('Backend!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}. mode: ${process.env.NODE_ENV}`)
})