var mongoose = require('mongoose');
var path = require('path');
var fs = require('fs');
var models_path = path.join(__dirname, './../models');

// Deal w/ DeprecationWarning: Mongoose: mpromise (mongoose's default promise library) is deprecated, plug in your own promise library instead: http://mongoosejs.com/docs/promises.html
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/exam_1');


fs.readdirSync(models_path).forEach(function(file) {
  if( file.indexOf('.js') >= 0 ){
		require(models_path + '/' + file);
	}
})
