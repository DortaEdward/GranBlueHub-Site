const bcrypt = require('bcrypt');
const express = require('express');
const users = express.Router();
const User = require('../models/user.js')

users.get('/login', (req,res)=>{
    res.render('./users/login.ejs',{currentUser: req.session.currentUser})
})

users.get('/signup', (req,res)=>{
    res.render('./users/new.ejs',{currentUser: req.session.currentUser})
})

users.post('/', (req,res)=>{
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    User.create(req.body,(error, createdUser)=>{
        console.log(createdUser)
        console.log('New User is created ')
        res.redirect('/gbh')
    })
})

module.exports= users
