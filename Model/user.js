const mongoose = require('mongoose')


// const userSchema  = new mongoose.Schema({
//     name:{
//         type:String,
//         required:[true,'name is required']
//     },
//     password:{
//         type:String,
//         required:[true,'name is required']
//     }
// }),

// const  Model = mongoose.model('User',userSchema)

// module.exports = Model
const userSchema = new mongoose.Schema({
    name:{

        type:String,
                required:[true,'name is required']
            },
            password:{
                type:String,
                required:[true,'name is required']
            }
})


const  Model = mongoose.model('User',userSchema)

module.exports = Model