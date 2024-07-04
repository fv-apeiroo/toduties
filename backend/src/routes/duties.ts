import { Router } from 'express'
import { getDuties, createDuty, updateDuty, deleteDuty } from '../controllers/duties'

const router = Router()

router.get('/', getDuties)
router.post('/', createDuty)
router.put('/:id', updateDuty)
router.delete('/:id', deleteDuty)

export default router