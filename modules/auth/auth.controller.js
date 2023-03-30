const bcrypt = require('bcrypt')
const userService = require('./auth.service')

const create =  async (req, res, next) => {
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
    const { id } = req.params;
    const result = await userService.update(id, req.body);
    return res.send(result);
}

const remove = async (req, res, next) => {
    try {
        id = req.params['id']
        const result = await userService.removeUser(id);
        return res.status(201).send({
        message: 'user has been deleted successfully'
    })
    } catch (err) {
        next(err)
    }
}

const getUser = async (req, res, next) => {
    try {
        id = req.params['pid']
        const user = await userService.getUserById(id);
        return res.json(user);   
    } catch (err) {
        next(err)
    }
}

const checkByPhone = async (req, res, next) => {
    try {
        phone = req.params['pid']
        const user = await userService.getUserByPhone(String(phone));
        if (!user){
            return res.status(403).json({message: "invalid credential!",})
        }
        return res.json('ok').status(200)
    } catch (err) {
        return res.status(406).json({message: "invalid credential!",})
    }
}

const getUserOrders = async (req, res, next) => {
    console.log('hey')
}

const chargeBallance = async (req, res, next) => {
    console.log('hey')
}

const walletBallance = async (req, res, next) => {
    // try {
    
    // } catch (error) {
        
    // }
}

const auth = async (req, res, next) => {
    try {
        const { phone, password } = req.body
        const user = userService.getUserByPhone(phone)
        if (!user) {
            return res.status(403).json({
              message: "invalid credential!",
            });
        }
        const validPass = await bcrypt.compare(password, user.password);
        if (!validPass)
        return res.status(403).json({
          message: "invalid credential!",
        });
        const token = jwt.sign({ username: user.email }, process.env.SECRET_KEY, {
        expiresIn: Number(process.env.TOKEN_EXPIRE_TIME),});
        
        return res.json({
            access_token: token,
        });   
    } catch (error) {
        error.status = 500;
        next(error);
    }
}



module.exports = {
    create,
    update,
    getUser,
    checkByPhone,
    remove,
    walletBallance,
    auth

}