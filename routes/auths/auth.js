const express = require('express')
const router = express.Router()

const { authController } = require('../../modules').authModule

router.post('/user', authController.create) // create a user
router.patch('/user/:id', authController.update) // update a profile by id
router.delete('/user/:id', authController.delete) // remove a user by id
router.get('/user/:id', authController.getUser) // get user profile by id
router.head('/user/:phone', authController.check) // check user exists by phone
router.get('/user/order', authController.getUserOrders) //get all user orders
router.post('/users/wallet', authController.chargeBallance) //increase wallet balance
router.get('/user/wallet', authController.walletBallance) // get wallet balance

router.post('/auth') //User authentication via phone and password


module.exports = router;