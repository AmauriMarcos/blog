const express     = require('express');
const mongoose    = require('mongoose');
const bodyParser  = require('body-parser');
const cors        = require('cors');
const BlogPost    = require('./model');
const app         = express();

require('dotenv').config()
app.use(cors())

//CONNECTING MONGOOSE to MONGODB CLOUD(ATLAS)
const mongodb_uri = process.env.MONGODB_LINK;

mongoose.connect(mongodb_uri || 'mongodb://localhost/nuxt-mongodb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!!")
});


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


  app.get('/', (req, res) =>{
    BlogPost.find(function (err, posts) {
      if (err) return console.error(err);
          posts.forEach((post) =>{
             console.log(post);
             
          });
    })
      res.send('hello')
  });



module.exports = {
    path: "/api/",
    handler: app
}



