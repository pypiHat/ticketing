const bcrypt = require('bcrypt')
const userService = require('./auth.service')


const create = async (req, res, next) => {
    try {
        const { password } = req.body
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const userId = await userService.register({
            ...req.body,
            password: hashedPassword
        })
        return res.status(201).send({
            userId,
          });
    } catch (err) {
        next(err)
    }
}


const update = async (req, res, next) => {
    console.log('hey')
}

const remove = async (req, res, next) => {
    console.log('hey')
}

const getUser = async (req, res, next) => {
    console.log('hey')
}

const check = async (req, res, next) => {
    console.log('hey')
}

const getUserOrders = async (req, res, next) => {
    console.log('hey')
}

const chargeBallance = async (req, res, next) => {
    console.log('hey')
}

const walletBallance = async (req, res, next) => {
    console.log('hey')
}

const auth = async (req, res, next) => {
    console.log('123');
}



module.exports = {
    create,
}