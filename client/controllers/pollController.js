app.controller('pollController', function($scope, pollFactory, $routeParams, $route, $location) {
  $scope.survey = {};

  var index = function() {
    if($routeParams.id) {
      pollFactory.getSurveys(function(data) {
        $scope.surveys = data
        for(var key in $scope.surveys) {
          if($scope.surveys[key]['_id'] == $routeParams.id) {
            $scope.survey = $scope.surveys[key]
          }
        }
      })
    }else{
      pollFactory.getSurveys(function(data) {
        $scope.surveys = data
        // console.log(data, "this is daal;kdsjflkasjdflkasjdflk;asjdflkajsdflk")
      })
    }
  }
  index()

  $scope.createPoll = function() {
    // console.log("console Poll controllers tessdaf;lkads")
    pollFactory.createPoll($scope.survey, function( data ) {
      if(data.errors) {
        $scope.errors = data.errors
      }else{
        $scope.survey = ''
        $location.url('/dashboard')
        index()
      }
    })
  }

  $scope.deleteSurvey = function(id) {
    pollFactory.deleteSurvey(id)
    index()
  }
  $scope.vote = function(idx) {
    pollFactory.vote($routeParams.id, idx, index )
  }
})
