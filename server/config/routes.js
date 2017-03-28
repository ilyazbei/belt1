var user = require('./../controllers/users.js')
var poll = require('./../controllers/polls.js')

module.exports = function(app) {
  app.post('/login', function(req, res) {
    user.login(req, res);
  })
  app.get('/checkstatus', function(req, res) {
    user.checkStatus(req, res);
  })
  app.get('/logout', function(req, res) {
    user.logout(req, res);
  })
  app.post('/createPoll', function(req, res) {
    // console.log(req.body, "thsi is req basdjfkl;asdkl;fjasdfkl;")
    poll.createPoll(req, res);
  })
  app.get('/getSurveys', function(req, res) {
    poll.getSurveys(req, res)
  })
  app.delete('/deleteSurvey/:id', function(req, res) {
    poll.deleteSurvey(req, res)
  })
  app.get('/surveys/:id/vote/:index', function(req, res) {
    poll.vote(req, res)
  })
}
