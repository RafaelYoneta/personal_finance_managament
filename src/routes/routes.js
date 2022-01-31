const router = require('express').Router()
const { modelNames } = require('mongoose')
const revenueController = require('../controller/revenues.js')  


router.get('/revenues',revenueController.listRevenue)

module.exports = router
