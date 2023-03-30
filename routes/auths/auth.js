
const express = require('express');
const router = express.Router()

const {authController} = require('../../modules').authModule


// function logUserRoute(req, res, next) {
//     console.log("user route");
//     console.log(req.body);
//     console.log(req.params);
//     next();
//   }
  
//   router.use(logUserRoute);
  



router.post('/user', authController.create); // create a user
router.patch('/user/:id', authController.update) // update a profile by id
router.delete('/user/:id', authController.remove) // remove a user by id
router
    .route('/user/:pid')
    .head(authController.checkByPhone) // check user exists by phone
    .get(authController.getUser) // get user profile by id
// router.get('/user/order', authController.getUserOrders) //get all user orders
// router.post('/users/wallet', authController.chargeBallance) //increase wallet balance
// router.get('/user/wallet', authController.walletBallance) // get wallet balance

router.post('/auth', authController.auth) //User authentication via phone and password


module.exports = router;