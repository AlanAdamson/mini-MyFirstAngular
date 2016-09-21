angular.module('friendsList').controller('mainCtrl', function($scope) {
  $scope.name = 'Alan';
  $scope.friends = ['Kirsten', 'Charles', 'Travis'];
  $scope.addFriend = function(friendNew) {
    $scope.friends.push(friendNew);
  };
});
