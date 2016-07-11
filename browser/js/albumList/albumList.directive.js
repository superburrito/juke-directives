juke.directive('albumList', function(){
	return {
		restrict: 'E',
		templateUrl: '/js/albumList/templates/albumList.html',
		scope: {
			albums: '='
		}
	};
});