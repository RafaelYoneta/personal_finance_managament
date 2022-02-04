const revenueModel = require('../model/revenueModel')

async function listRevenue(req,res){
    const {id} = req.body
    const obj = id ? {_id:id} : null
    const userRevenue = await revenueModel.find(obj)
    res.send(userRevenue)

};

async function registerRevenue(req,res){
    const {
        description,
        value,
        revenueDate,
    } = req.body

    const newRevenue = new revenueModel({
        description,
        value,
        revenueDate,
        createdAt: new Date(),
        updatedAt: null,
    })

    const saveRevenue = await newRevenue.save()
    
    res.status(200).send(saveRevenue)
}

async function updateRevenue(req,res){
   
    const updateRevenue = revenueModel({
        _id: req.body.id,
        description: req.body.description,
        value: req.body.value,
        revenueDate: req.body.revenueDate,
        updatedAt: new Date(),
    })
    
    const updatedRevenue = await revenueModel.findOneAndUpdate({_id:req.body.id},updateRevenue,{new:true})
    
    res.status(200).send(updatedRevenue)
}



module.exports = {
    listRevenue,
    registerRevenue,
    updateRevenue,
}