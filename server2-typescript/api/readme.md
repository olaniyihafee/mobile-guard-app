# node-auth

## curl

```sh
curl -d "{\"email\": \"alexa@gmail.com\", \"name\": \"Alex\", \"password\": \"secret12\", \"passwordConfirmation\": \"secret12\" }" -H "Content-Type:application/json" -X POST http://localhost:3000/register

curl -v -X POST http://localhost:3000/register -H "Content-Type:application/json" -d "{\"email\": \"alexa@gmail.com\", \"name\": \"Alex\", \"password\": \"secret12\", \"passwordConfirmation\": \"secret12\" }"


curl -v -X POST https://server2-typescript.herokuapp.com/register -H "Content-Type:application/json" -d "{\"email\": \"alexa@gmail.com\", \"name\": \"Alex\", \"password\": \"secret12\", \"passwordConfirmation\": \"secret12\" }"

curl -v -f \"email\": \"alexa@gmail.com\" -f \"name\": \"Alex\" -f \"password\": \"secret12\" -f \"passwordConfirmation\": \"secret12\" -f \"file\": \"C:/Users/ABDULLAHI/Downloads/bond.jpg\"  -X POST http://localhost:3000/signup

curl -v -d {-form \"email\": \"alexa@gmail.com\" -form \"name\": \"Alex\" -form \"password\": \"secret12\" -form \"passwordConfirmation\": \"secret12\" -form \"files\": \"C:/Users/ABDULLAHI/Downloads/bond.jpg\"}   -H "Content-Type: multipart/form-data" -X POST http://localhost:3000/signup

curl -v -form "{\"email\": \"alexa@gmail.com\", \"name\": \"Alex\", \"password\": \"secret12\", \"file\": \"C:/Users/ABDULLAHI/Downloads/bond.jpg\" }" -H "Content-Type: multipart/form-data" -X POST http://localhost:3000/signup

curl -v -form -d "{\"email\": \"alexa@gmail.com\", \"name\": \"Alex\", \"password\": \"secret12\", \"files\": \"C:/Users/ABDULLAHI/Downloads/bond.jpg\" }" -H "Content-Type: multipart/form-data" -X POST http://localhost:3000/signup

curl -v -form \"email\"=\"alexa@gmail.com\" -form \"name\"= \"Alex\" -form \"password\"= \"secret12\" -form \"passwordConfirmation\"= \"secret12\" -form \"files\"= \"C:/Users/ABDULLAHI/Downloads/bond.jpg\" -H "Content-Type: multipart/form-data"  -X POST http://localhost:3000/signup

curl -v -f \"files\"= \"C:/Users/ABDULLAHI/Downloads/bond.jpg\" -H "Content-Type: multipart/form-data" -X POST http://localhost:3000/signup

curl -v -f -d {\"files\"= \"C:/Users/ABDULLAHI/Downloads/bond.jpg\"} -H "Content-Type: multipart/form-data" -X POST http://localhost:3000/signup

--working

curl -v -F email=alexa@gmail.com -F 'files=@\"C:/Users/ABDULLAHI/Downloads/bond.jpg\"' -H "Content-Type: multipart/form-data" -X POST http://localhost:3000/signup

curl -v -F email=alexa@gmail.com -F name=alexa -F files=@\"C:/Users/ABDULLAHI/Downloads/bond.jpg\" -F files=@\"C:/Users/ABDULLAHI/Downloads/i.jpeg\" -H "Content-Type: multipart/form-data" -X POST http://localhost:3000/signup

    "express": "^4.17.1",
    "express-session": "^1.17.1",

    
    "@types/express": "^4.17.11",
    "@types/express-session": "^1.17.3",
    
    "@hapi/joi": "^17.1.1",

    
    

    web:ts-node/api/src/index.ts

    $ git remote add origin https://github.com/username/new_repo

    git subtree add --prefix subtreeDirectory https://github.com/olaniyihafee/mobile-guard-app.git master
    git subtree push --prefix subtreeDirectory https://github.com/olaniyihafee/mobile-guard-app.git master

    git subtree add --prefix server2-typescript https://github.com/olaniyihafee/mobile-guard-app.git master
    git subtree push --prefix server2-typescript https://github.com/olaniyihafee/mobile-guard-app.git master

    git subtree push --prefix my-app heroku master
```