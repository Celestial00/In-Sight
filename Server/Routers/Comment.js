const express = require('express');
const Comments = express.Router()

Comments.get('/',(req, res) =>{

    res.send('hello world')

})


module.exports = Comments