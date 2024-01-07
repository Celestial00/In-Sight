const Mongoose = require('mongoose')

const UserModel = Mongoose.Schema({

    Name:{
        type:String,
        Required:true
    },

    Email:{
        type:String,
        Required:true
    },
    Password:{

        type:String,
        Required: true

    },
 

    
}, {timestamp: true} )

module.exports = Mongoose.model('users', UserModel)