const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Character = require('../models/character.js');

// middleware


// Home route
router.get('/', (req,res)=>{
    res.render('homepage.ejs')
})

router.get('/basics', (req,res)=>{
    res.render('basics.ejs')
})

// Show Route
router.get('/characters', (req,res) =>{
    Character.find({},(error, allCharacters)=>{
        res.render('show.ejs',{
            characters : allCharacters
        })
    })
})

// Index route
router.get('/:id', (req,res) =>{
    Character.findById(req.params.id ,(error,char)=>{
        res.render('index.ejs',{
            character: char
        })
    })
})





module.exports = router;
