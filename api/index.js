import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import bcrypt from 'bcryptjs'
import { UserModel } from './models/User.js'

dotenv.config()
const app = express()
const salt = bcrypt.genSaltSync(2)

app.use(express.json())
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:5173',
  })
)

mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@cluster0.jiejejq.mongodb.net/?retryWrites=true&w=majority`
)

app.post('/register', async (req, res) => {
  const { email, name, password } = req.body

  try {
    const user = await UserModel.create({
      name,
      email,
      password: bcrypt.hashSync(password, salt),
    })

    res.json(user)
  } catch (error) {
    res.status(422).json(error)
  }
})

app.listen(3000, () => {
  console.log('Starting the api....')
})
