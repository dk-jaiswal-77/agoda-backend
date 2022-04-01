const express = require("express");

// router
const router = express.Router();

// importing model
const RoomType = require("../models/roomType.model");

//CRUD operations
//POST 
router.post("/", async (req, res) => {
    try{
        const roomType = await RoomType.create(req.body);
        res.status(200).send(roomType);
    }catch(error){
        res.send(500).res(error);
    }
});

//GET
router.get("/:id", async(req, res) => {
    try{
        const rooms = await RoomType.find({hotel_id : req.params.id}).populate({path : "hotel_id", select : []}).lean().exec();
        res.status(200).send(rooms);
    }catch(error){
        res.status(500).send(error.message);
    }
});


// exporting router
module.exports = router;
