const mongoose = require("mongoose");

const db_URI = process.env.db_URI;

async function connect() {
    try{
        await mongoose.connect(db_URI);
        console.log("connected to db!");
    }catch(error){
        console.log(error);
    }
}

module.exports = connect;