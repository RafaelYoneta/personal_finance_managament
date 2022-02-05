const router = require('express').Router()
const revenueController = require('../controller/revenues.js')  
const expenseController = require('../controller/expenses.js')


router.get('/revenues',revenueController.listRevenue)
router.post('/registerRevenue',revenueController.registerRevenue)
router.put('/updateRevenue',revenueController.updateRevenue)
router.put('/deleteRevenue',revenueController.deleteRevenue)

router.get('/expenses',expenseController.listExpenses)

module.exports = router
