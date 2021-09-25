import { Router } from 'express'
import { auth, catchAsync } from '../middleware'
import { Group, User } from '../models'
import { sortFromDb, collect_and_attach_imgs_and_files } from '../download'
import { reorders_index_removing_space_and_repetition, reorders_index_adding_space_and_repetition } from '../download/searchErrors'

const router = Router()

router.get('/groups', catchAsync(async (req, res) => {
    const { listLengthSoFar } = req.body //collect length of the quantity of groups shown to user so far if any

    const groupList = await sortFromDb( Group, listLengthSoFar) //collect new list
  
    const {finalFile, indexOf_emptyspace_or_rep} = await collect_and_attach_imgs_and_files(groupList, 'photos', 'groupPicture')
    const list = reorders_index_adding_space_and_repetition(finalFile, indexOf_emptyspace_or_rep)

    //attaching imgs to lists
    groupList.forEach((x: any,i: any)=>{
        if(!(indexOf_emptyspace_or_rep.includes(i))){
            if(list[i] !== undefined){
                x.groupPicture = list[i].theFile
            }
    }
        //console.log('eachDoc: '+x.groupPicture)
        //console.log('getSortedGroups: '+getSortedGroups[i].theFile)
    })
    
    res.send( groupList )
}))

router.get('/groups/eachgroup', auth, catchAsync(async (req, res) => {
    res.json(await User.findById(req.session!.userId))
}))

export default router