import { Router } from 'express'
import { validate, registerSchema } from '../validation'
import { Group, User } from '../models'
import { logIn } from '../auth'
import { guest, catchAsync, uploadUserFiles, uploadGroupFiles } from '../middleware'
import { BadRequest } from '../errors'
import { sortFromDb, collect_and_attach_imgs_and_files } from '../download'

const router = Router()

router.post('/register/personal_registration', guest, uploadUserFiles, catchAsync(async (req, res) => {
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

 router.post('/register/join_new_groups', catchAsync(async (req, res) => {

    const { listLengthSoFar } = req.body //collect length of the quantity of groups shown to user so far if any

    const groupList = await sortFromDb( Group, listLengthSoFar) //collect new list
 
    const getSortedGroups: any = await collect_and_attach_imgs_and_files(groupList, 'Group')  //collecting imgs belonging to groups from groups collection

    //attaching imgs to lists
    groupList.forEach((x: any,i: any)=>{
        x.groupPicture = getSortedGroups[i].theFile
        //console.log('eachDoc: '+x.groupPicture)
        //console.log('getSortedGroups: '+getSortedGroups[i].theFile)
    })
    
    res.send( groupList )  

}))
/*
router.post('/register/join_new_groups', guest, catchAsync(async (req, res) => {
    await validate(registerSchema, req.body)

    const { email, name, password, groupsToJoinList } = req.body

    groupsToJoinList.forEach((groupname: Group,i)=> { 
        const found = await User.exists({ email })

        if(!found){
            await Groups.insert({ email })
        }
    })

    res.json({ message: 'OK'})
        
}))*/

router.post('/register/form_new_group', uploadGroupFiles, catchAsync(async (req, res) => {

    //await validate(registerSchema, req.body)

    //email of user and details about the group to be formed
    const { email, name, about } = req.body

    //collecting image from multer
    const { id } = req.file
    const groupPicture = id

    //search for group from database
    const found = await Group.exists({ name })

    //if group exist error
    if (found){
        res.json({ message: 'Pick a Different Group Name'})
    }

    //assigning user email as admin
    const adminEmail = email
    
    //form new group
    const user = await Group.create({
        name, about, groupPicture, adminEmail
    })

    res.json({ message: 'OK'})

}))

 
export default router