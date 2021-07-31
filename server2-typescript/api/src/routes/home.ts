import { Router } from 'express'
import { auth, catchAsync } from '../middleware'
import { User } from '../models'
import { sortFromDb, collect_and_attach_imgs_and_files } from '../download'

const router = Router()

router.get('/home', auth, catchAsync(async (req, res) => {
    res.json(await User.findById(req.session!.userId))

    const { listLengthSoFar } = req.body //collect length of the quantity of groups shown to user so far if any

    //a db query to collect all the groups the user belongs to and pass it on
    User.

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

export default router