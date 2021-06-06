
// const Model = require('../Model/')
const Model = require('../Model/user')
const AppError = require('../utils/AppError')
const  CatchAsync = require('../utils/CatchAsync')

exports.post=CatchAsync(async(req,res,next)=>{
    const {name,password} = req.query
    console.log(name,password)
    const data = new Model({
        name,
        password 
    })
    const data1 = await data.save()
    res.status(201).json({
        message:'success',
        data1 
    })
})

exports.get=CatchAsync(async(req,res,next)=>{

    const allData =await Model.findOne() 
    console.log('allData',allData)
    res.status(200).json({
        message:'success',
        allData,
        name:"mero naam jacob ryan ho",
        age:23
    })
})