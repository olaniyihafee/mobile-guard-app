import { object } from 'joi';
import mongoose, { Schema, model, Document } from 'mongoose'
import { groupSchema, LocationGroup, postSchema, User } from '../models'
import { reorders_index_removing_space_and_repetition, reorders_index_adding_space_and_repetition } from '../download/searchErrors'

export const collectFromDb = async ( TheCollection: any, theList: any ) => {

  let collectedList = await TheCollection.find({_id: {$in: [...theList]}})

  return collectedList

}

export const sortFromDb = async ( TheCollection: any, lastCount: number ) => {
  
  let Count;  //variable to collect the number of past collection

  if(!lastCount){ Count = 0} //last collected is empty
  else{ Count = lastCount} //if there is value for last collected

  const SortedRange = await TheCollection.find().skip( await TheCollection.count() - lastCount)

  //console.log('Chibakutensei: ' +SortedRange)

  return SortedRange

}

const return_collection_model = ( schema_to_check: String) => {
 //return User
 switch(schema_to_check){
   case 'post': return postSchema
   case 'group': return  groupSchema
 }

}

export const collect_and_attach_imgs_and_files = async (usedList: [], collectionName: String, imageCollectionPart: any) => {

  let finalFile: any = [];

  const collection = model(`${collectionName}.files`, return_collection_model(collectionName));    
  const collectionChunks = model(`${collectionName}.chunks`, return_collection_model(collectionName));//new Schema({})

  let placeholder: any = []
  usedList.forEach((x: any,i)=>{
    if(usedList[i][imageCollectionPart.valueOf()] !== ''){ 

      if(Array.isArray(usedList[i][imageCollectionPart.valueOf()])){ //control statement to check if the search area is an array or a string
        let hold = usedList[i][imageCollectionPart.valueOf()]
        console.log(hold[0])
        placeholder.push(hold[0])
      }

      else{                                                           //control statement to check if the search area is an array or a string
        console.log(usedList[i][imageCollectionPart.valueOf()])
        placeholder.push(usedList[i][imageCollectionPart.valueOf()])
      }
      
    }
    //console.log(...placeholder)
  })

  const {list_without_emptyspace_or_rep, indexOf_emptyspace_or_rep} = reorders_index_removing_space_and_repetition(placeholder)

  console.log("...usedList: "+ [...list_without_emptyspace_or_rep])

 await collection.find({_id: {$in: [...list_without_emptyspace_or_rep]}}).then(
  async ( docs: any) =>{        
     console.log("doc "+ [...docs]) 
    if(!docs || docs.length === 0){        
      return {
       title: 'Download Error', 
       message: 'No file found'};      
     }else{

      let placeholder: any = []
        docs.forEach((x: any,i: any)=>{
          placeholder.push(x._id)
          //console.log(...placeholder)
        })

        console.log("...docs: "+ [...placeholder])
    
      //Retrieving the chunks from the db          
      await collectionChunks.find({files_id: {$in: [...placeholder]}}).then((chunks: any)=>{          
         
        if(!chunks || chunks.length === 0){            
          //No data found            
          return {
             title: 'Download Error', 
             message: 'No data found'};          
        }
     
        //console.log(chunks)
     let fileData = [];          
      for(let i=0; i<chunks.length;i++){            
        //This is in Binary JSON or BSON format, which is stored               
        //in fileData array in base64 endocoded string format               
       
        //fileData.push(chunks[i].data.toString('base64')); 
        
        fileData.push(chunks[i]._doc.data.toString('base64'));

        //console.log(Object.keys(chunks[i]))
        //const boy: any = Object.values(chunks[i])
        //console.log(boy[3].data.toString('base64'))
      }
      
       
      for(let i=0; i<chunks.length; i++){            
        //This is in Binary JSON or BSON format, which is stored               
        //in fileData array in base64 endocoded string format 

        
          let theFile = 'data:' + docs[i]._doc.contentType + ';base64,' 
          + fileData[i]

          finalFile.push({ 
            theFile
          });
        
      }
       });      
      }           
     }); 

     //console.log('Chibakutensei: ' +finalFile)
     return {finalFile, indexOf_emptyspace_or_rep}
         

}


 