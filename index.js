const mongoose  = require('mongoose')
const dotenv = require('dotenv')
const express = require('express')
const app = express()
const router = require('./router/user') 

// const { MONGO_IP,MONGO_PORT,MONGO_USER,MONGO_PASSWORD} =require('./config/config').mongo
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

mongoose.connect(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_IP}:${process.env.MONGO_PORT}/docker?authSource=admin`,{ useNewUrlParser: true,useUnifiedTopology: true  },
// mongoose.connect('mongodb://root:example@mongo:27017/docker?authSource=admin',{ useNewUrlParser: true,useUnifiedTopology: true  },
// mongoose.connect('mongodb://root:example@mongo:27017/docker?authSource=admin',{ useNewUrlParser: true,useUnifiedTopology: true  },
// mongoose.connect('mongodb://root:example@172.26.0.2:27017/docker?authSource=admin',{ useNewUrlParser: true,useUnifiedTopology: true  },
 
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
