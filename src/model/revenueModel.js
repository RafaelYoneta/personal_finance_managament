const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    description:String,
    value:Number,
    revenueDate:Date,
    status:String,
    userId:mongoose.ObjectId,
    createdAt:Date,
    removedAt:Date,
    updatedAt:Date,
})

const Model = mongoose.model('revenues',schema)

module.exports = Model