import express from 'express'
import cors from 'cors'
const app = express()

app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:5173',
  })
)

app.get('/route', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log('Starting the api....')
})
