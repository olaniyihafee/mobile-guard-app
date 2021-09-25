import { Router } from 'express'
import { auth, catchAsync } from '../middleware'
import { User, Group, Post } from '../models'
import { collectFromDb, collect_and_attach_imgs_and_files } from '../download'
import { reorders_index_removing_space_and_repetition, reorders_index_adding_space_and_repetition } from '../download/searchErrors'


const router = Router()

router.get('/notifications', catchAsync(async (req, res) => {

  const { quantityOfCountsSoFar, lastGroup } = req.body //collect length of the quantity of groups shown to user so far if any
    
    //a db query to collect all the groups the user belongs to and pass it on
  let searchGroups: any = []
  let postsFromGroups: any = []

  await User.find({name: "User A"},function(err, doc: any){
      console.log(doc[0].groups)
      searchGroups = doc[0].groups

      searchGroups.forEach((X: any, h: any)=>{
          //console.log('this is X: ' + X)

          //a db query to collect the groups inside the selected user
          Group.find({name: X}, async function(err, innerdoc: any){
          
              //console.log(innerdoc[0].posts) 
              postsFromGroups = postsFromGroups.concat(...innerdoc[0].posts)
          
              if( h === (searchGroups.length -1)){ //this control statement is to make sure the rest of the function run only at the last element of the above for each statement
                //console.log('The total Posts: ' + [...postsFromGroups])     

                  //collect the exact posts attach thier images and files and send it to user
                  Post.find({_id: {$in: [...postsFromGroups]}, createdAt: {$gt: new Date(Date.now() - (70*60*60*1000))}}).then(async (nextInnerDoc: any)=>{
                                       
                    const {finalFile, indexOf_emptyspace_or_rep} = await collect_and_attach_imgs_and_files(nextInnerDoc, 'post', 'images')  //collecting imgs belonging to groups from groups collection
                    const list = reorders_index_adding_space_and_repetition(finalFile, indexOf_emptyspace_or_rep)
                    
                    //attaching imgs to lists
                    nextInnerDoc.forEach((x: any,i: any)=>{
                      if(!(indexOf_emptyspace_or_rep.includes(i))){
                        x.images[0] = list[i].theFile
                      }
                    }) 

                    res.send( nextInnerDoc )
                  })//end of post and sending
 
              }//end of if used to check the index of searchGroups
          })//end fo for each for search group
      })
    }) 
}))

router.get('/notifications/register_for_notification', auth, catchAsync(async (req, res) => {
    res.json(await User.findById(req.session!.userId))
}))

router.post('/notifications/send_notifications', auth, catchAsync(async (req, res) => {
    res.json(await User.findById(req.session!.userId))
}))
/* 
app.get('/video', function(req, res) {
  const path = 'assets/sample.mp4'
  const stat = fs.statSync(path)
  const fileSize = stat.size
  const range = req.headers.range
  if (range) {
    const parts = range.replace(/bytes=/, "").split("-")
    const start = parseInt(parts[0], 10)
    const end = parts[1] 
      ? parseInt(parts[1], 10)
      : fileSize-1
    const chunksize = (end-start)+1
    const file = fs.createReadStream(path, {start, end})
    const head = {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': 'video/mp4',
    }
    res.writeHead(206, head);
    file.pipe(res);
  } else {
    const head = {
      'Content-Length': fileSize,
      'Content-Type': 'video/mp4',
    }
    res.writeHead(200, head)
    fs.createReadStream(path).pipe(res)
  }
}); */

export default router