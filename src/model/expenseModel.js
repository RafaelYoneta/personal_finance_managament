const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    description:String,
    category:String,
    value:Number,
    expenseDate: Date,
    status:String,
    userId:mongoose.ObjectId,
    createdAt:Date,
    removedAt:Date,
    updatedAt:Date,
    
})

const Model = mongoose.model('expense',schema)

module.exports = Model