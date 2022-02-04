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
        userId,
    } = req.body

    const newRevenue = new revenueModel({
        description,
        value,
        revenueDate,
        userId,
        status:"Active",
        createdAt: new Date(),
        updatedAt: null,
        removedAt:null,
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

async function deleteRevenue(req,res){
   
    const deleteRevenue = revenueModel({
        _id: req.body.id,
        status: "Removed",
        updatedAt: new Date(),
        removedAt:new Date(),
    })

    const deletedRevenue = await revenueModel.findOneAndUpdate({_id:req.body.id},deleteRevenue,{new:true})
    
    res.status(200).send(deletedRevenue)
}


module.exports = {
    listRevenue,
    registerRevenue,
    updateRevenue,
    deleteRevenue,
}