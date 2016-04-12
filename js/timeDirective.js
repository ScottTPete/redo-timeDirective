angular.module('timeApp')
	.directive('showTime', function() {
		return {
			restrict: 'E',
			template: '<div> The current time is {{time | date: "medium"}} </div>',
			link: function(scope, element, attrs) {
				scope.time = new Date();
				scope.time =currentTime.toString();
			}
		}
})