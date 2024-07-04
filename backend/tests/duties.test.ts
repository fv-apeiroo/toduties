import { getDuties, createDuty, updateDuty, deleteDuty } from '../src/controllers/duties'
import { Request, Response } from 'express'
import { query } from '../src/db'

jest.mock('../src/db')

describe('Duties Controller', () => {
    let req: Partial<Request>
    let res: Partial<Response>
    let json: jest.Mock
    let status: jest.Mock
    let send: jest.Mock

    beforeEach(() => {
        json = jest.fn()
        send = jest.fn()
        status = jest.fn().mockReturnValue({ json, send })
        res = { status, json, send }
    });

    it('should get all duties', async () => {
        (query as jest.Mock).mockResolvedValueOnce({ rows: [{ id: '1', name: 'Test Duty' }] })
        await getDuties(req as Request, res as Response)
        expect(res.status).not.toHaveBeenCalled()
        expect(res.json).toHaveBeenCalledWith([{ id: '1', name: 'Test Duty' }])
    });

    it('should create a duty', async () => {
        req = { body: { name: 'New Duty' } };
        (query as jest.Mock).mockResolvedValueOnce({ rows: [{ id: '2', name: 'New Duty' }] })
        await createDuty(req as Request, res as Response)
        expect(res.status).toHaveBeenCalledWith(201)
        expect(res.json).toHaveBeenCalledWith({ id: '2', name: 'New Duty' })
    });

    it('should update a duty', async () => {
        req = { params: { id: '1' }, body: { name: 'Updated Duty' } };
        (query as jest.Mock).mockResolvedValueOnce({ rows: [{ id: '1', name: 'Updated Duty' }] })
        await updateDuty(req as Request, res as Response)
        expect(res.json).toHaveBeenCalledWith({ id: '1', name: 'Updated Duty' })
    });

    it('should delete a duty', async () => {
        req = { params: { id: '1' } };
        (query as jest.Mock).mockResolvedValueOnce({})
        await deleteDuty(req as Request, res as Response)
        expect(res.status).toHaveBeenCalledWith(204)
        expect(res.send).toHaveBeenCalled()
        expect(res.json).not.toHaveBeenCalled()
    });

});