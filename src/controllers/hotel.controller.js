const express = require("express");

// router
const router = express.Router();

// importing model
const Hotel = require("../models/hotel.model");

// file upload // saving hotel images to server 
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        // console.log(file);
        cb(null, path.join(__dirname, "../uploads"));
    },
    filename : (req, file, cb) => {
        cb(null, Date.now() + "_" + file.originalname);
    }
});

const upload = multer({storage : storage});



// CRUD operations
// POST
router.post("/", upload.any("rooms_images"), async(req, res) => {
    try{
        req.body.images = req.files.map((file) => (file.path))
        await Hotel.create(req.body);
        res.status(200).send("hotel data saved to db!");
    }catch(error){
        console.log(error);
        res.status(500).send(error.message);
    }
});

// GET
router.get("/", async(req, res) => {
    try{
        const hotels = await Hotel.find().lean().exec();
        console.log(hotels);
        res.status(200).send(hotels);
    }catch(error){
        res.status(500).send(error.message);
    }
})



module.exports = router;