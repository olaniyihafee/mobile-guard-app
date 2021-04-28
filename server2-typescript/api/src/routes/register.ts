import { Router } from 'express'
import { validate, registerSchema } from '../validation'
import { User } from '../models'
import { logIn } from '../auth'
import { guest, catchAsync } from '../middleware'
import { BadRequest } from '../errors'

const router = Router()

router.post('/register', guest, catchAsync(async (req, res) => {
    await validate(registerSchema, req.body)
    console.log('HIT')
    
    const { appelation, email, name, password } = req.body

    const found = await User.exists({ email })

    if (found){
        throw new BadRequest('Invalid email')
    }

    
    const user = await User.create({
        appelation, email, name, password
    })

    console.log(user.id)

    logIn(req, user.id)

    res.status(1)

    res.json({ message: 'OK'})
}))

export default router