var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function() {
  return {
    login: function(req, res) {
      // console.log(req.body, "kljahsdklfj")
      // console.log(req.session.user, "req.session al;ksdfjaklsjdf")
      User.findOne({ name: req.body.name }, function(err, data) {
        // console.log(data, "blah lkdfjlakjsfdlkjasdfkljasl")
        if(!data) {
          var user = new User(req.body);
          user.save(function(err, data) {
            if(err){
              res.json(err)
            }else{
              req.session.user = data;
              req.session.save()
              res.json(data)
            }
          })
        }else{
          req.session.user = data;
          req.session.save()
          res.json(data)

        }
      })
    },

    checkStatus: function(req, res) {
      // console.log("lk;adsfjlka;jsdflkajdsflkjasdlfkj;kladsjfklasjdf")
      if(req.session.user) {
        res.json(req.session.user)
      }else{
        res.json(null)
      }
    },

    logout: function(req, res) {
      req.session.destroy();
      res.redirect('/')
    }
  }
})()
