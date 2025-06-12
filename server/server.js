import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'

const PORT=process.env.PORT||4000
const app=express()

app.use(express.json()) //all requests will be passed using json method
app.use(cors({
  origin: [
    "http://localhost:4000",  // for my local development
    "http://localhost:5173",  // while using Vite
    "https://imagelyai-frontend.onrender.com"  // my deployed frontend
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))
await connectDB() //connects express to mongoDB

app.use('/api/user',userRouter) //all user related routes will be prefixed with /api/user

app.use('/api/image',imageRouter) 

app.get('/',(req,res)=>res.send("API Working")) //when we hit the path / then this msg will be sent

app.listen(PORT,()=>console.log('Server is running on port '+PORT));
