const express = require('express')
const router = express.Router()


router.post('/user',) // create a user
router.patch('/user/:id') // update a profile by id
router.delete('/user/:id') // remove a user by id
router.get('/user/:id') // get user profile by id
router.head('/user/:phone') // check user exists by phone
router.get('/user/order') //get all user orders
router.post('/users/wallet') //increase wallet balance
router.get('/user/wallet') // get wallet balance

router.post('/auth') //User authentication via phone and password


module.exports = router;