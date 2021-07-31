import { Router } from 'express'
import { guest, catchAsync, auth, uploadUserFiles } from '../middleware'
import { User } from '../models'
import { validate, loginSchema } from '../validation'
import { Unauthorized } from '../errors'
import { logIn, logOut } from '../auth'

const router = Router()

router.post('/login', guest, uploadUserFiles, catchAsync(async (req, res) => {

console.log ('it entered the login code')
console.log (req.body)

const { email, password } = req.body

const test = { email, password }

 await validate(loginSchema, test)

 const user = await User.findOne({ email }) 

 if (!user || !(await user.matchesPassword(password))) {
     throw new Unauthorized('Incorrect email or password')
 }

 logIn(req, user.id)

 res.json({ message: 'OK'})
}))

router.post('/logout', auth, catchAsync(async (req, res) => {
    await logOut(req, res)

    res.json({ message: 'OK'})
}))

export default router