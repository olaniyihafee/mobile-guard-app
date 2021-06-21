const {MongoClient} = require('mongodb')

export const getFile = async (req: any, res: any) => {  
    //Accepting user input directly is very insecure and should      
    //never be allowed in a production app.  
    //Sanitize the input before accepting it  
    //This is for demonstration purposes only  
    
    let fileName = req.body.text1;  
    
    //Connect to the MongoDB client
   
      await MongoClient.connect("mongodb://localhost:27017/juniper", async (err: any, client: any) => {
          if(err){      
           return res.render('index', 
            {
            title: 'Uploaded Error', 
            message: 'MongoClient Connection error', error: err.errMsg});    
               }  

      const db = client.db('juniper');
      const collection = await db.collection('photos.files');    
      const collectionChunks = await db.collection('photos.chunks');
   collection.find({}).toArray(function(err: any, docs: any){        
      if(err){        
        return res.render('index', {
         title: 'File error', 
         message: 'Error finding file', 
          error: err.errMsg});      
      }
    if(!docs || docs.length === 0){        
      return res.render('index', {
       title: 'Download Error', 
       message: 'No file found'});      
     }else{
    
      //Retrieving the chunks from the db          
      collectionChunks.find({})
       .sort({n: 1}).toArray(function(err: any, chunks: any){          
         if(err){            
            return res.render('index', {
             title: 'Download Error', 
             message: 'Error retrieving chunks', 
             error: err.errmsg});          
          }
        if(!chunks || chunks.length === 0){            
          //No data found            
          return res.render('index', {
             title: 'Download Error', 
             message: 'No data found'});          
        }
     
       
     let fileData = [];          
      for(let i=0; i<chunks.length;i++){            
        //This is in Binary JSON or BSON format, which is stored               
        //in fileData array in base64 endocoded string format               
       
        fileData.push(chunks[i].data.toString('base64'));  

      }
      
      let finalFile = []; 
      for(let i=0; i<fileData.length; i++){            
        //This is in Binary JSON or BSON format, which is stored               
        //in fileData array in base64 endocoded string format 

        let theFile = 'data:' + docs[i].contentType + ';base64,' 
        + fileData.join('')

        finalFile.push({
          title: 'Image File', 
          message: 'Image loaded from MongoDB GridFS', 
          imgurl: theFile
        });
        //console.log(finalFile[i])
        

        //res.send({imgurl: finalFile})  
      }
      res.send(finalFile)
         
       });       
      }          
     });   
   });
  }; 

/* 
module.exports.getFile = async (req, res) => {  
    //Accepting user input directly is very insecure and should      
    //never be allowed in a production app.  
    //Sanitize the input before accepting it  
    //This is for demonstration purposes only  
    
    let fileName = req.body.text1;  
    
    //Connect to the MongoDB client
   
      await MongoClient.connect("mongodb://localhost:27017/juniper", async (err, client) => {
          if(err){      
           return res.render('index', 
            {
            title: 'Uploaded Error', 
            message: 'MongoClient Connection error', error: err.errMsg});    
               }  

      const db = client.db('juniper');
      const collection = await db.collection('photos.files');    
      const collectionChunks = await db.collection('photos.chunks');
   collection.find({filename: '1621793709459-bezkoder-f3.jpg'}).toArray(function(err, docs){        
      if(err){        
        return res.render('index', {
         title: 'File error', 
         message: 'Error finding file', 
          error: err.errMsg});      
      }
    if(!docs || docs.length === 0){        
      return res.render('index', {
       title: 'Download Error', 
       message: 'No file found'});      
     }else{
    
      //Retrieving the chunks from the db          
     collectionChunks.find({files_id : docs[0]._id})
       .sort({n: 1}).toArray(function(err, chunks){          
         if(err){            
            return res.render('index', {
             title: 'Download Error', 
             message: 'Error retrieving chunks', 
             error: err.errmsg});          
          }
        if(!chunks || chunks.length === 0){            
          //No data found            
          return res.render('index', {
             title: 'Download Error', 
             message: 'No data found'});          
        }
     
      let fileData = [];          
      for(let i=0; i<chunks.length;i++){            
        //This is in Binary JSON or BSON format, which is stored               
        //in fileData array in base64 endocoded string format               
       
        fileData.push(chunks[i].data.toString('base64'));  
        
        
      }
       
       //Display the chunks using the data URI format          
       let finalFile = 'data:' + docs[0].contentType + ';base64,' 
            + fileData.join(''); 
            //res.send({imgurl: finalFile})  
        /* res.render('imageView', {
           title: 'Image File', 
           message: 'Image loaded from MongoDB GridFS', 
           imgurl: finalFile});*/
      /* });      
      }          
     });   
   });
  }; */