var mongoose = require('mongoose');
var OptionSchema = new mongoose.Schema( {
  option: { type: String, required: true, minlength: 3},
  vote: { type: Number, default: 0 }
})

var PollSchema = new mongoose.Schema( {
  question: { type: String, required: true, minlength: 8 },
  options: [ OptionSchema ],
  _user: { type: String, ref: 'User'}
}, { timestamps: true });

mongoose.model('Poll', PollSchema);
