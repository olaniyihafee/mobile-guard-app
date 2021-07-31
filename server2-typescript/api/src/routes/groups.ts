import { Router } from 'express'
import { auth, catchAsync } from '../middleware'
import { User } from '../models'

const router = Router()

router.get('/groups', auth, catchAsync(async (req, res) => {
    res.json(await User.findById(req.session!.userId))
}))

router.get('/groups/eachgroup', auth, catchAsync(async (req, res) => {
    res.json(await User.findById(req.session!.userId))
}))

export default router