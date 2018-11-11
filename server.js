const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//set up mongo url
let db_url = 'mongodb://127.0.0.1/my_record_project';
mongoose.connect(db_url);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));

// create Mongoose schema
var albumSchema = new mongoose.Schema({
  title: String,
  artist: String,
  year: Number,
  genre: Array,
  label: String,
  art: String,
  tracks: Array
});

// create Mongoose model
var Album = mongoose.model('Album', albumSchema, "albums");

// create basic express server, set route to root folder
const app = express();
app.use(cors());

// go inside of user model and pull out all albums
app.get('/getAll', function(request, response) {
  Album.find({}, function(err, documents){
    if(err){
      console.log(err);
    }else{
      response.send(documents);
    }
  });
});

app.listen(3000, function(){
  'Server is running on 3000'
});
