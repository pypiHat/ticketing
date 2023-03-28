const express = require('express')
const app = express()


require('dotenv').config() // register .env variables



const auth = require('./routes/auths/auth')
const ticket = require('./routes/v1/ticket')
const order = require('./routes/v1/order')


require('./routes')(app) // register routes



app.use('/api/v1', auth)
app.use('/api/v1/ticket', ticket)
app.use('/api/v1/order', order)





// start server
const port = process.env.PORT
app.listen(port, () => {
    console.log(`server running on port ${port}.`)
})
