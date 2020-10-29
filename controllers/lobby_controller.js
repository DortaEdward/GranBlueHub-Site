const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const users = express.Router();
const mongoose = require('mongoose');
const Lobby = require('../models/lobbys.js')
const User = require('../models/user.js')
router.use(express.urlencoded({extended:true}));

router.get('/add-lobby', (req,res)=>{
    res.render('./lobby/new.ejs',{currentUser: req.session.currentUser})
})

router.post('/add-lobby',(req,res)=>{
    Lobby.create(req.body, (error, createdLobby)=>{
        console.log(createdLobby)
        res.redirect('/gbh')
    })
})



module.exports = router;
