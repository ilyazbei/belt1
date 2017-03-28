var express=require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');

app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

//start the server
app.listen(8000, function(){
  console.log('listening on port 8000');
});
