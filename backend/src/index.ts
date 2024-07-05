import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import dutiesRoutes from './routes/duties'
import path from 'path'
import cors from 'cors'

dotenv.config({ path: path.resolve(__dirname, '../../.env') })

const app = express();
const port = process.env.PORT || 5000

app.use(cors(
    {origin: 'http://localhost:8081'}
))

app.use(bodyParser.json())

app.use('/api/duties', dutiesRoutes)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})