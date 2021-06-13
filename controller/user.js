
// const Model = require('../Model/')
const Model = require('../Model/user')
const AppError = require('../utils/AppError')
const  CatchAsync = require('../utils/CatchAsync')

// exports.post=CatchAsync(async(req,res,next)=>{
//     const {name,password} = req.query
//     console.log(name,password) 
//     const data = new Model({
//         name,
//         password 
//     })
//     const data1 = await data.save()
//     res.status(201).json({
//         message:'success',
//         data1 
//     })
// })
exports.getPost=CatchAsync(async(req,res,next)=>{
    console.log(req.query)
    res.status(200).json({
        success:true
    })
})
exports.delete = CatchAsync(async(req,res,next)=>{
    res.status(301).json({
        message:'deleted'
    })
})

exports.get=CatchAsync(async(req,res,next)=>{

    const allData =await Model.findOne() 
    console.log('allData',allData)
    res.status(200).json({
        message:'success',
        allData,
        name:"mero naam jacob ryan ho",
        age:23,
        location:"ktm"
    })
})