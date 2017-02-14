function ContactFormatController($scope) {
  this.formatUsername = function() {
      $scope.username = $scope.username.toLowerCase()
  };

};

angular
  .module('app')
  .controller('ContactFormatController', ContactFormatController)
