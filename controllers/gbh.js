const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Character = require('../models/character.js');
const User = require('../models/user.js');
const Lobby = require('../models/lobbys.js');

// middleware



// Home route
router.get('/', (req,res)=>{
    res.render('./characters/homepage.ejs',{currentUser: req.session.currentUser})
})

// add lobby route
router.get('/add-lobby',(req,res)=>{
    res.render('./lobby/new.ejs',{currentUser: req.session.currentUser})
})

router.get('/basics', (req,res)=>{
    res.render('./characters/basics.ejs',{currentUser: req.session.currentUser})
})

router.post('/',(req,res)=>{
    Lobby.create(req.body, (error, createdLobby)=>{
        console.log(createdLobby)
        res.redirect('/gbh')
    })
})


// Show Route
router.get('/characters', (req,res) =>{
    Character.find({},(error, allCharacters)=>{
        res.render('./characters/show.ejs',{
            characters : allCharacters,
            currentUser: req.session.currentUser

        })
    })
})

// Index route
router.get('/:id', (req,res) =>{
    Character.findById(req.params.id ,(error,char)=>{
        res.render('./characters/index.ejs',{
            character: char,
            currentUser: req.session.currentUser
        })
    })
})

// Index route






module.exports = router;
