const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
    images : [{type : String, required : true}],
    hotel_name : {type : String, required : true},
    location : {type : String, required : true},
    city : {type : String, required : true},
    country : {type : String, required : true},
    rating : {type : Number, required : true},
    room_facilities : {type : String, required : true},
    price_high : {type : Number, required : true},
    price_low : {type : Number, required : true}
}, {versionKey : false, timestamps : true});

const Hotel = mongoose.model("hotel", hotelSchema);

module.exports = Hotel;