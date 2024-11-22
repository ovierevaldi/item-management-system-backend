import express from 'express';
import dotenv from 'dotenv';

const envFile = process.env.NODE_ENV === 'production' ? '.env' : '.env.development';
dotenv.config({path: envFile});

const app = express()
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Backend!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}. mode: ${process.env.NODE_ENV}`)
})