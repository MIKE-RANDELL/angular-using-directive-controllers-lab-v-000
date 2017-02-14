function ContactFormatController($scope) {
  //this.formatUsername = function() {
      $scope.username = $scope.username.toLowerCase()
  //};
};

angular
  .module('app')
  .controller('ContactFormatController', ContactFormatController)


function ContactCard() {
	return {
		scope: {
			name: '=',
			email: '=',
			phone: '=',
			username: '='
		},
		template: [
			'<div>',
				'<h4>Contact Card</h4>',
				'<label>Name:</label>',
				'{{ name }}',
				'<label>Email:</label>',
				'{{ email }}',
				'<label>Phone:</label>',
				'{{ phone }}',
				'<label>Username:</label>',
				'<span class="username"> {{username}} </span>', //'<button ng-click="ctrl.formatUsername()">Change Handle</button>',
			'</div>'
		].join(''),
		restrict: 'E',
		//require: ['ContactFormatController'],
		controller: 'ContactFormatController as ctrl'
	};
}

angular
	.module('app')
	.directive('contactCard', ContactCard);
