export const API_URI = `http://localhost:3000`


let url ="http://localhost:3000"

export const getRequest = async ( branch, body ) => {
    var read = await fetch( url + branch,{
      "body": body
    })
      return read.json() 
}

export const PostRequest = async ( branch, body ) => {
  console.log("it entered "+body)

  if (branch === '/register/form_new_group'){
    console.log("it entered form new group")
    var read = await fetch( url + branch,{
      "method": 'POST',
      "body": body,
    })
  return read.json()
  }
  
  else if(branch !== '/login'){
    var read = await fetch( url + branch,{
                "method": 'POST',
                "headers": {
                  "content-type": "application/json"
                },
                "body": JSON.stringify({
                  lengthSoFar: body,
              })
              })
        return read.json()  
    }
  else{
    var read = await fetch( url + branch,{
      "method": 'POST',
      "body": body,
    })
  return read.json()
  }
}