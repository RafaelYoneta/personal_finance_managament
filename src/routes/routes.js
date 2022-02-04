const router = require('express').Router()
const { modelNames } = require('mongoose')
const revenueController = require('../controller/revenues.js')  


router.get('/revenues',revenueController.listRevenue)
router.post('/registerRevenue',revenueController.registerRevenue)
router.put('/updateRevenue',revenueController.updateRevenue)
router.put('/deleteRevenue',revenueController.deleteRevenue)

module.exports = router
