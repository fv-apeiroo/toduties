import { Request, Response } from 'express'
import { query } from '../db'
import { Duty } from '../types'

export const getDuties = async (req: Request, res: Response) => {
    try {
        const result = await query('SELECT * FROM duty')
        const duties: Duty[] = result.rows
        res.json(duties)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Unknown error occurred' });
        }
    }
}

export const createDuty = async (req: Request, res: Response) => {
    const { name } = req.body
    try {
        const result = await query('INSERT INTO duty (name) VALUES ($1) RETURNING *', [name])
        const newDuty: Duty = result.rows[0]
        res.status(201).json(newDuty)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Unknown error occurred' });
        }
    }
}

export const updateDuty = async (req: Request, res: Response) => {
    const { id } = req.params
    const { name } = req.body
    try {
        const result = await query('UPDATE duty SET name=$1 WHERE id=$2 RETURNING *', [name, id])
        const updatedDuty: Duty = result.rows[0]
        res.json(updatedDuty)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Unknown error occurred' });
        }
    }
}

export const deleteDuty = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        await query('DELETE FROM duty WHERE id=$1', [id])
        res.status(204).send()
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Unknown error occurred' });
        }
    }
}