var app = angular.module('app', ['ngRoute']);


app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/logReg.html'
  })
  .when('/dashboard', {
    templateUrl: 'partials/listPolls.html'
  })
  .when('/create', {
    templateUrl: 'partials/newPoll.html'
  })
  .when('/poll/:id', {
    templateUrl: 'partials/showOptions.html'
  })
  .otherwise( {
    redirectTo: '/'
  })
})
