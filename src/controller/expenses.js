const expenseModel = require('../model/expenseModel')

async function listExpenses(req,res){

        const {id} = req.body
        const expenceId = id ? {_id:id} : null
        const expenses = await expenseModel.find(expenceId)
        res.send(expenses)

}

module.exports = {
    listExpenses,
}
