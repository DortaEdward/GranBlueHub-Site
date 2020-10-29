const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Character = require('../models/character.js');
const User = require('../models/user.js');
const Lobby = require('../models/lobbys.js');



// Home route
router.get('/', (req,res)=>{
        Lobby.find({},(error, allLobbies)=>{
                res.render('./characters/homepage.ejs',{
                    currentUser: req.session.currentUser,
                    lobbies: allLobbies,
                })
        })
})

// Lobby Route
router.get('/add-lobby',(req,res)=>{
    res.render('./lobby/new.ejs',{
        currentUser: req.session.currentUser
    })
})

// Basic Route
router.get('/basics', (req,res)=>{
    res.render('./characters/basics.ejs',{
        currentUser: req.session.currentUser
    })
})

router.get('/:id/edit', (req,res)=>{
    Character.findById(req.params.id,(error,updatedCharacter)=>{
        if(error){
            console.log(error)
        }else{
            res.render(
                './characters/edit.ejs',
                {
                    character : updatedCharacter,
                    currentUser: req.session.currentUser
                }
            )
        }

    })
})


router.put('/:id', (req,res)=>{
    Character.findByIdAndUpdate(req.params.id, req.body, {new: true},(error,updatedCharacter)=>{
            if(error){
                console.log(error)
            }else{
                
                res.redirect('/gbh')
            }

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

router.delete('/delete/:id',(req,res)=>{
    Lobby.findByIdAndRemove(req.params.id,(error,data)=>{
        if(error){
            console.log(error)
        }else{
            console.log(data)
            res.redirect('/gbh')
        }

    })
})



// Index Route
router.get('/:id', (req,res) =>{
    Character.findById(req.params.id ,(error,char)=>{
        res.render('./characters/index.ejs',{
            character: char,
            currentUser: req.session.currentUser
        })
    })
})

module.exports = router;
