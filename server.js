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
const gbhController = require('./controllers/gbh.js');
app.use('/gbh',gbhController);

// using static files
app.use(express.static('public'))

// body parser
const bodyParser = require('body-parser')

app.use(express.urlencoded({extended:true}));

// establish connection with mongoose
mongoose.connect(mongodbURI, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, () => {
  console.log('Mongoose Connected');
});

// user controller
const userController = require('./controllers/users_controller.js')
app.use('/users', userController)



// port listener
app.listen(PORT, ()=>{
    console.log('Server is running on Port: ' + PORT)
})

module.exports = router;


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
