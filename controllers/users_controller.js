const bcrypt = require('bcrypt');
const express = require('express');
const users = express.Router();
const User = require('../models/user.js')

users.get('/new', (req,res)=>{
    res.render('new.ejs')
})

users.post('/', (req,res)=>{
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    User.create(req.body,(error, createdUser)=>{
        console.log('New User is created')
        res.redirect('/')
    })
})

module.exports= users
