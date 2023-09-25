const express = require('express')
const app = express()
const DB = require('./Database')
require('dotenv').config()



app.listen(process.env.PORT, () => {

    DB()
    console.log('connextex to ', process.env.PORT);

})