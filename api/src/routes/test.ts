import { Router } from 'express'
import { auth, catchAsync } from '../middleware'

const router = Router()

router.get('/', auth, catchAsync(async (req, res) => {
    res.send({message: "ok"})
}))

export default router