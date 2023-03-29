const express = require('express')
const router = express.Router()

const { orderController } = require('../../modules').orderModule


router.post('/', orderController.createOrder) // create an irder
router.patch('/:id', orderController.modifyOrder) // modify an order
router.patch('/:id/cancle', orderController.cancleOrder) // cancle an order by id
router.patch('/id/pay', orderController.payOrder) // pay for an order by id
