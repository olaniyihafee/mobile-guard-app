fetch('http://localhost:3000/register', {
      
      "method": 'POST',
      "headers": {        
        "Content-Type": "application/json",
      },
      "body":
        JSON.stringify({
          "email": "mahoalrbn@gmail.com",
          "name": "Alex",
          "password": "Secret12",
          "passwordConfirmation": "Secret12",
        }),
    })