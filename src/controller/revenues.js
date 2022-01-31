const revenueModel = require('../model/revenueModel')

async function listRevenue(req,res){
    const request = req
    const userRevenue = await revenueModel.find()
    res.send(userRevenue)

};

module.exports = {
    listRevenue,
}