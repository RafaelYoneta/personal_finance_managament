const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    description:String,
    category:String,
    value:Number,
    expenseDate: Date,
    
})

const Model = mongoose.model('expense',schema)

module.exports = Model