const mongoose = require("mongoose");

const roomTypeSchema = new mongoose.Schema({
    hotel_id : {type : mongoose.Schema.Types.ObjectId, ref : "hotel", required : true},    
    room_type : {type : String, required : true},
    room_details : {type : Object, required : true},
    deals : [{type : Object, required : true}]
}, {versionKey : false, timestamps : true});

const RoomType = mongoose.model("roomtype", roomTypeSchema);

module.exports = RoomType;