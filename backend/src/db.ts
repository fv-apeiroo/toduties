import { Pool } from 'pg'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve(__dirname, '../../.env') })

const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.DB_HOST || 'localhost',
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: parseInt(process.env.DB_PORT || '5432', 10)
})

export const query = (text: string, params?: any[]) => pool.query(text, params)