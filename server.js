import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv'
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
import categoryRoutes from './routes/categoryRoute.js'
import lexiqueRoutes from './routes/lexiqueRoute.js'
import cors from 'cors'
import path from 'path'
import {fileURLToPath} from 'url';

// config dotenv
dotenv.config();

// connect to DB
connectDB

const app = express()

// midellwares
app.use(cors())
app.use(express.json());
app.use(morgan('dev'))

// routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/product', lexiqueRoutes);


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(express.static('client/build'))
app.get("*", (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})



const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server Running on mode  on port ${PORT}`.bgCyan.white)
})

