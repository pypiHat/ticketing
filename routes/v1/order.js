const express = require('express')
const router = express.Router()

const { orderController } = require('../../modules').orderModule


router.post('/') // create an irder
router.patch('/:id') // modify an order
router.patch('/:id/cancle') // cancle an order by id
router.patch('/id/pay') // pay for an order by id
