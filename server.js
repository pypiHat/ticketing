const express = require('express')
const app = express()


require('dotenv').config() // register .env variables



const auth = require('./routes/auths/auth')


require('./routes')(app) // register routes



app.use('/api/v1', auth)





// start server
const port = process.env.PORT
app.listen(port, () => {
    console.log(`server running on port ${port}.`)
})
