const mongoose = require('mongoose')

const Comment = mongoose.Schema({

    comment:{
        type:String,
        required: true
    },
    author:{

        type:String,
        required: true 

    },
    postId:{
        type:String,
        required:true
    },

    userId:{

        type:String,
        required:true

    }


}, {timestamp: true})


module.exports = mongoose.Model('comments', Comment)
