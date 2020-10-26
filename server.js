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


// establish connection with mongoose
mongoose.connect(mongodbURI, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, () => {
  console.log('Mongoose Connected');
});

// port listener
app.listen(PORT, ()=>{
    console.log('Server is running on Port: ' + PORT)
})
