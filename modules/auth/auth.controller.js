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




module.exports = {
    create
}