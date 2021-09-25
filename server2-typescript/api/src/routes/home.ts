import { Router } from 'express'
import { auth, catchAsync } from '../middleware'
import { User, Group, Post } from '../models'
import { collectFromDb, collect_and_attach_imgs_and_files } from '../download'
import { reorders_index_adding_space_and_repetition } from '../download/searchErrors'

const router = Router()

router.get('/home', catchAsync(async (req, res) => {
   /* res.json(await User.findById(req.session!.userId))
*/
    const { quantityOfCountsSoFar, lastGroup } = req.body //collect length of the quantity of groups shown to user so far if any
    
    //a db query to collect all the groups the user belongs to and pass it on
  let searchGroups: any = []
  let postsFromGroups: any = []

  await User.find({name: "User A"},function(err, doc: any){
      console.log(doc[0].groups)
      searchGroups = doc[0].groups

      console.log('this is searchGroups: ' + searchGroups)
      let requieredPosts: any = []

      searchGroups.forEach((X: any, h: any)=>{
          console.log('this is X: ' + X)
          Group.find({name: X}, async function(err, innerdoc: any){
          
              console.log(innerdoc[0].posts) 
              postsFromGroups[h] = innerdoc[0].posts    
          
              console.log('The first total Posts: ' + [...postsFromGroups]) 
              if( h === (searchGroups.length -1)){ //this control statement is to make sure the rest of the function run only at the last element of the above for each statement
                console.log('The total Posts: ' + [...postsFromGroups])          
                            
                  let index = 5//ArrayAll.indexOf(ArrayC)
                  let maxValue = 30
                  let maxPostCountForAll = 10

                  let countToMax = 0
                  let secondIndex = 0
                  let i = 0

                  //the if and else statement is there to not if the query had gotten previous responses so as to determine where its to get its source from
                  if (i==index){ //if it does not start from the first

                    for(i; (i < (postsFromGroups.length) ); i++){
                      console.log('this is array values: ' +postsFromGroups[i][secondIndex])
                      requieredPosts.push(postsFromGroups[i][secondIndex])
                      
                    }
                    i = 0
                    secondIndex ++
                    for(i; (i < (postsFromGroups.length)) && (countToMax < maxValue); i++, countToMax++){
                        console.log('this is array values: ' +postsFromGroups[i][secondIndex])
                        requieredPosts.push(postsFromGroups[i][secondIndex])
                        if( postsFromGroups[i][secondIndex] == undefined) 

                        if((i == (postsFromGroups.length -1)) && (countToMax != maxValue)){
                            i = -1
                            secondIndex++
                        }//end of if
                        
                    }//end of for
                  }//end of if 
                  
                  else{ //if its starts from the first

                    for(i; (i < (postsFromGroups.length)) && (countToMax < maxValue); i++, countToMax++){
                        console.log('this is array values: ' +postsFromGroups[i][secondIndex])
                        requieredPosts.push(postsFromGroups[i][secondIndex])

                        if((i == (postsFromGroups.length -1)) && (countToMax != maxValue)){
                            i = -1
                            secondIndex++
                        }//end of if
                        
                    }//end of for
                  }//end of else
                  console.log('All the required Posts: ' +requieredPosts)

                  const theActualPost = await collectFromDb(Post, requieredPosts)

                  console.log('The actual Posts: ' +theActualPost)

                  let images: any = []
                  const {finalFile, indexOf_emptyspace_or_rep} = await collect_and_attach_imgs_and_files(theActualPost, 'post', 'images')  //collecting imgs belonging to groups from groups collection
                  const list = reorders_index_adding_space_and_repetition(finalFile, indexOf_emptyspace_or_rep)
                  console.log('The actual Posts length: ' +theActualPost.length)
                  console.log('getSortedGroups length: ' +finalFile.length)
                  //console.log('list: ' +list)
                  
                  //attaching imgs to lists
                  theActualPost.forEach((x: any,i: any)=>{
                    if(!(indexOf_emptyspace_or_rep.includes(i))){
                      x.images[0] = list[i].theFile
                    }
                  }) 

                  res.send( theActualPost )

              }//end of if used to check the index of searchGroups
          })//end fo for each for search group
      })
    })
   
}))

export default router