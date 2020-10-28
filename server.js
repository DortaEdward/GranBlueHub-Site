// importing env variables
require('dotenv').config()
const PORT = process.env.PORT;
const mongodbURI = process.env.MONGODBURI

// create express
const express = require('express');
const app = express();

// database
const mongoose = require('mongoose')
const db = mongoose.connection;

// router
const router = express.Router();

// sessions
const session = require('express-session')

// controllers
const gbhController = require('./controllers/gbh.js');
const userController = require('./controllers/users_controller.js')
const sessionsController = require('./controllers/sessions_controller.js')
const lobbyController = require('./controllers/lobby_controller.js')

// establish connection with mongoose
mongoose.connect(mongodbURI, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, () => {
  console.log('Mongoose Connected');
});


// body parser
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:true}));

// sessions middleware
app.use(session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false
        })
)

// using static files
app.use(express.static('public'))



app.get('/',(req,res)=>{
    res.redirect('/gbh')
})

// homepage controller
app.use('/gbh',gbhController);

// user controller
app.use('/users', userController)

// session controller
app.use('/sessions', sessionsController)

// lobby controller
app.use('/lobby', lobbyController)

// port listener
app.listen(PORT, ()=>{
    console.log('Server is running on Port: ' + PORT)
})

module.exports = router;
