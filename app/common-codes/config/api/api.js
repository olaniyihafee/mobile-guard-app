export const API_URI = `http://localhost:3000`


let url ="http://localhost:3000"

export const getRequest = async ( branch ) => {
    var read = await fetch( url + branch)
      return read.json() 
}

export const PostRequest = async ( branch, method, body ) => {
  var read = await fetch( 'http://localhost:3000/register/personal_registration',{
              "method": 'POST',
              "body": body
            })
      return read.json()  
}