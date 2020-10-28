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






app.use('/gbh',gbhController);

// user controller
app.use('/users', userController)

// session controller
app.use('/sessions', sessionsController)



// port listener
app.listen(PORT, ()=>{
    console.log('Server is running on Port: ' + PORT)
})

module.exports = router;

// <% if(currentUser){ %>
// <li>
//     <form action="/sessions?_method=DELETE" method="POST">
//         <input type="submit" value="Log Out">
//     </form>
// </li>
// <%} else{ %>
//     <li><a href="/users/login">Log in/ Sign In</a></li>
// <% } %>









// <form class="request-form" action="/gbh" method="POST">
//     <fieldset>
//         <label for="">Name</label>
//         <input type="text" name="" value="">
//     </fieldset>
//     <fieldset>
//         <label for="">Platform</label>
//         <select class="" name="">
//             <option value="">Steam</option>
//             <option value="">Playstaion 4</option>
//         </select>
//     </fieldset>
//
//     <input type="submit" name="" value="Add Lobby" class='join-btn'>
// </form>
//                                     <button type="button" name="button" class="join-btn">Remove</button>
