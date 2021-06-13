const mongoose  = require('mongoose')
const dotenv = require('dotenv')
const express = require('express')
const app = express()
const router = require('./router/user')

dotenv.config({path:'./dot.env'})

// console.log(process.argv) 

if(process.env.NODE_ENV === 'development'){
    console.log('development mode')
}
else {
    console.log('production mode')
}

 
const server = process.env.PORT;

  

app.use('/',router)
//ya nirako mongo vneko chai conatiner koname ho
// mongoose.connect('mongodb://username:password@host:port/database?options...', {useNewUrlParser: true});
mongoose.connect('mongodb://root:example@mongo:27017/docker?authSource=admin',{ useNewUrlParser: true,useUnifiedTopology: true  },
// mongoose.connect('mongodb://root:example@172.26.0.2:27017/docker?authSource=admin',{ useNewUrlParser: true,useUnifiedTopology: true  },
// {
//     "user": "root", 
// "pass": "example",

// "roles": [ { "role": "userAdminAnyDatabase", "db": "admin" }, "readWriteAnyDatabase" ],
// "useMongoClient": true}
)
.then(()=>{
app.listen(server,()=>{
        console.log(`connected to port at ${process.env.PORT}`)
    })
}) 
  
process.on('unhandledRejection',(err) => { 
    console.log(err.name,err.message);
    process.exit(1);
});
