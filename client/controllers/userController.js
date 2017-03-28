app.controller('userController', function($scope, userFactory, $location) {

  userFactory.checkStatus(function(data) {
    $scope.curUser = data;
  })

  $scope.login = function() {
    // console.log($scope.user.name)
    if(!$scope.user || !$scope.user.name ) {
      $scope.error = "Enter your name!"
    }else if($scope.user.name.length < 3 ) {
      $scope.error = "User name must be at least 3 characters long!"
    }else {
      userFactory.login($scope.user, function(data) {
        if(data.errors) {
          $scope.errors = data.errors
          console.log(data.errors, "dskl;afldskfj;lkajsfdkla;sfj;klasdf")
        }else{
          $location.url('/dashboard')
        }
      })
    }
  }

})
