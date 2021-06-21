import { Router } from 'express'
import { validate, registerSchema } from '../validation'
import { User } from '../models'
import { logIn } from '../auth'
import { guest, catchAsync, uploadFiles } from '../middleware'
import { BadRequest } from '../errors'

const router = Router()

router.post('/register/personal_registration', guest, uploadFiles, catchAsync(async (req, res) => {
    console.log(req)
    await validate(registerSchema, req.body)
    console.log('HIT')
    
    const { email, name, password } = req.body
    const { id } = req.file  //collecting the details to the profile picture from multer

    const profilePicture = id  //assigning the detail to profilepicture variable

    console.log(req.body)
    console.log(id)

    const found = await User.exists({ email })

    if (found){
        throw new BadRequest('Invalid email')
    }
    
    const user = await User.create({
        email, name, password, profilePicture
    })
    
    logIn(req, user.id)

    console.log(user.id)
    
    res.json({ message: 'OK'})
}))

/* router.get('/register/join_new_groups', guest, catchAsync(async (req, res) => {
    const found = await Groups.find({ email })

    res.json( found )
        
}))

router.post('/register/join_new_groups', guest, catchAsync(async (req, res) => {
    await validate(registerSchema, req.body)

    const { email, name, password } = req.body

    const found = await Groups.insert({ email })

    res.json({ message: 'OK'})
        
}))

router.post('/register/form_new_group', guest, catchAsync(async (req, res) => {

    await validate(registerSchema, req.body)

    const { email, name, password } = req.body

    const found = await User.exists({ email })

    if (found){
        throw new BadRequest('Invalid email')
    }
    
    const user = await User.create({
        email, name, password
    })

    res.json({ message: 'OK'})

}))

 */
export default router