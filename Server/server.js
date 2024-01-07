const express = require('express')
const app = express()
const DB = require('./Database')
const Auth = require('./Routers/Auth')
const Post = require('./Routers/Post')
const cookieParser = require('cookie-parser')
const Comment = require('./Routers/Comment')
const cors = require('cors')
require('dotenv').config()



//Middleware
app.use(cors({origin:'http://localhost:3000', credentials:true}))
app.use(express.json())
app.use(cookieParser())
app.use('/api/auth', Auth);
app.use('/api/post', Post)
app.use('/api/comment', Comment)
app.listen(process.env.PORT, () => {

    DB()
    console.log('connextex to ', process.env.PORT);

})


