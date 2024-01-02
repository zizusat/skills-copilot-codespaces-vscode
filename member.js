function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'templates/member.html',
    scope: {
      member: '=',
      onRemove: '&'
    },
    controller: function($scope) {
      $scope.remove = function() {
        $scope.onRemove();
      };
    }
  };
}
