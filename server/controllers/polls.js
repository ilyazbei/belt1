var mongoose = require('mongoose');
var Poll = mongoose.model('Poll');

module.exports = (function() {
  return {
    createPoll: function(req, res) {

      var poll = new Poll({
        question: req.body.question,
        _user: req.session.user.name
      });
      poll.options.push({option: req.body.opt_1})
      poll.options.push({option: req.body.opt_2})
      poll.options.push({option: req.body.opt_3})
      poll.options.push({option: req.body.opt_4})
      poll.save(function(err, data) {
        if(err) {
          res.json(err)
        }else{
          res.json(data)
        }
      })
    },
    getSurveys: function(req, res) {
      Poll.find({}, function(err, surveys) {
        if(err) {
          console.log(err)
        }else{
          res.json(surveys)
        }
      }).sort("-createdAt")
    },

    deleteSurvey: function(req, res){
      Poll.remove({ _id: req.params.id }, function(err){
        if (err) { return res.json(err); }
        return res.json(true);
      });
    },

    vote: function(req, res) {
      Poll.findOne({_id: req.params.id }, function(err, question) {
        if(err) {
          console.log(err);
        }
        question.options[req.params.index].vote++
        question.save(function (err) {
          if(err) {
            console.log(err);
          }
          res.json({status: 'ok'})
        })
      })
    }

  }
})()
