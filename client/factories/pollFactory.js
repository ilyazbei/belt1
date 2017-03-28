app.factory('pollFactory', function($http, $location) {
  var factory = {};

  factory.createPoll = function(survey, cb) {
    $http.post('/createPoll', survey).then(function(output) {
      cb(output.data)
    })
  }
  factory.getSurveys = function(cb) {
    $http.get('getSurveys').then(function(data) {
      cb(data.data)
    })
  }
  factory.deleteSurvey = function(id) {
    var idObject = {id: id};
    $http.delete('deleteSurvey/'+ id)
  }
  factory.vote = function(surveyId, idx, callback) {
    $http.get('/surveys/' + surveyId + '/vote/' + idx).then(callback)
  }

  return factory
})
