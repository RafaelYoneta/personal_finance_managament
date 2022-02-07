const router = require('express').Router()
const revenueController = require('../controller/revenues.js')  
const expenseController = require('../controller/expenses.js')
const authController = require('../controller/auth.js')
const userController = require('../controller/user.js')

//revenue
router.get('/revenues',authController.validateToken,revenueController.listRevenue)
router.post('/registerRevenue',revenueController.registerRevenue)
router.put('/updateRevenue',revenueController.updateRevenue)
router.put('/deleteRevenue',revenueController.deleteRevenue)

//exprenses
router.get('/expenses',expenseController.listExpenses)

//Auth
router.post('/validateToken',authController.validateToken)
router.post('/refreshToken',authController.refreshToken)

//user
router.post('/login', userController.login)
router.post('/createUser',userController.createUser)


module.exports = router
