const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name:String,
    email:String,
    status:String,
    role:String,
    hash:String,
    createdAt:Date,
    removedAt:Date,
    updatedAt:Date,
})

const Model = mongoose.model('users',schema)

module.exports = Model