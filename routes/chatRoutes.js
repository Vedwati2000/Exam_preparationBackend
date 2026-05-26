const express = require("express");
const router = express.Router();
const Chat = require('../models/Chat');
router.post('/save-chat', async(req, res) => {
    try {
        const {
            userName,
            userQuestion,
            aiResponse
        } = req.body;

        const newChat = new Chat({
            userName,
            userQuestion,
            aiResponse
        });

        await newChat.save();

        res.status(201).json({
            success: true,
            message : "Chat saved successfully"
        })
    }catch(error){
        console.log(error);

        res.status(500).json({
            success : false,
            message : "Server Error"
        })
    }
});

module.exports = router;