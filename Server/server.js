const express = require('express')
const app = express()
const DB = require('./Database')
const Auth = require('./Routers/Auth')
const Post = require('./Routers/Post')
const Comment = require('./Routers/Comment')
require('dotenv').config()



//Middleware
app.use(express.json())
app.use('/api/auth', Auth);
app.use('/post', Post)
app.use('/comment', Comment)
app.listen(process.env.PORT, () => {

    DB()
    console.log('connextex to ', process.env.PORT);

})


