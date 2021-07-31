import { object } from 'joi';
import mongoose, { Schema, model, Document } from 'mongoose'

export const sortFromDb = async ( TheCollection: any, lastCount: number ) => {
  
  let Count;  //variable to collect the number of past collection

  if(!lastCount){ Count = 0} //last collected is empty
  else{ Count = lastCount} //if there is value for last collected

  const SortedRange = await TheCollection.find().skip( await TheCollection.count() - lastCount)

  return SortedRange

}

export const sortFromDb = async ( TheCollection: any, lastCount: number ) => {
  
  let Count;  //variable to collect the number of past collection

  if(!lastCount){ Count = 0} //last collected is empty
  else{ Count = lastCount} //if there is value for last collected

  const placeHolder = []
  forEach((EachCollection) => {

    const SortedValue = await EachCollection.find()

    placeHolder.push( SortedValue )
  })

  const SortedRange = await TheCollection.find().skip( await TheCollection.count() - lastCount)

  return SortedRange

}

export const collect_and_attach_imgs_and_files = async (usedList: [], collectionName: String) => {

 /* const experiment = model('photos.files', new Schema({}), 'photos.files')
   const experiment = mongoose.Collection.
  //.db('juniper').collection('photos.files')
  const result = await experiment.find({})

  console.log(result) }*/

  let CollectionName
  let finalFile: any = [];
  
  const collection = model(`${collectionName}.files`, new Schema({}));    
  const collectionChunks = model(`${collectionName}.chunks`, new Schema({}));

  let placeholder: any = []
  usedList.forEach((x: any,i)=>{
    placeholder.push(x.groupPicture)
    //console.log(...placeholder)
  })

  console.log("...usedList: "+ [...placeholder])

 await collection.find({_id: {$in: [...placeholder]}}).then(
  async ( docs: any) =>{        
      
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
      
       
      for(let i=0; i<fileData.length; i++){            
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

  
     return finalFile 
         

}

/* 

 */

 