export const API_URI = `https://localhost:3000`


let url ="http://localhost:3000/projects"

export const getRequest = async ( branch) => {
    var read = await fetch( url + branch,{
                  "method": 'GET',
                  "headers": {
                    "content-type": "application/json"
                  },
                })
      return read.json() 
}

export const PostRequest = () => {
    fetch(url,{
        "method": 'POST',
        "headers": {
          "content-type": "application/json"
        },
      })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        localStorage.setItem('my-test', JSON.stringify(response));
      })
      .catch(err => {console.log(err);}); 
}