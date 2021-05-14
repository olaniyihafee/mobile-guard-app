# node-auth

## curl

```sh
curl -d "{\"email\": \"alexa@gmail.com\", \"name\": \"Alex\", \"password\": \"secret12\", \"passwordConfirmation\": \"secret12\" }" -H "Content-Type:application/json" -X POST http://localhost:3000/register

curl -v -X POST http://localhost:3000/register -H "Content-Type:application/json" -d "{\"email\": \"alexa@gmail.com\", \"name\": \"Alex\", \"password\": \"secret12\", \"passwordConfirmation\": \"secret12\" }"


curl -v -X POST https://server2-typescript.herokuapp.com/register -H "Content-Type:application/json" -d "{\"email\": \"alexa@gmail.com\", \"name\": \"Alex\", \"password\": \"secret12\", \"passwordConfirmation\": \"secret12\" }"

    "express": "^4.17.1",
    "express-session": "^1.17.1",

    
    "@types/express": "^4.17.11",
    "@types/express-session": "^1.17.3",
    
    "@hapi/joi": "^17.1.1",

    web:ts-node/api/src/index.ts
```