// Server routes back here after authenticating with GitHub
angular.module('duel.authCtrl', ['ui.router'])

.controller('AuthCtrl', ['$scope', '$stateParams', '$state', 'User',  function ($scope, $stateParams, $state, User){

  var userid = $stateParams.userid;
 
  User.login(userid)
      .then(function() {
      $state.go('lobby', {
      userid: $scope.userid
      });
    });
}]);