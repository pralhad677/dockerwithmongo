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

  

app.use('/jacob',router)
//ya nirako mongo vneko chai conatiner koname ho
mongoose.connect('mongodb://mongo:27017/docker',{ useNewUrlParser: true,useUnifiedTopology: true  })
.then(()=>{
app.listen(server,()=>{
        console.log(`connected to port at ${process.env.PORT}`)
    })
}) 
 
process.on('unhandledRejection',(err) => { 
    console.log(err.name,err.message);
    process.exit(1);
});
