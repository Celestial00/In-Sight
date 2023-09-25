const mongoose = require('mongoose')


const ConnectToDb = async () => {

    try {

        await mongoose.connect(process.env.DATABASE_URL)
        console.log("connected to db");

    }

    catch (e) {

        console.log(e);


    }

}

module.exports = ConnectToDb;

