const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Character = require('../models/character.js');

// middleware


// Home route
router.get('/', (req,res)=>{
    res.render('homepage.ejs')
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
        res.send(char)
    })
})

// Character.findOneAndUpdate({name:'Zooey'}, {img:'/img/headshots/zooey-headshot.png'},(err,char)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('Done')
//     }
// })


module.exports = router;
