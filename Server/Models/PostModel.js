const Mongoose = require('mongoose')

const Post = Mongoose.Schema({

    Title:{
        type:String,
        required: true
    },

    Context:{
        type:String,
        required: true
    },

    photo:{

        type:String,
        required: false

    },

    userId:{
        type:String,
        required: true
    },

    Tags:{

        type:Array
    },

    


})

module.exports = Mongoose.model('posts', Post)