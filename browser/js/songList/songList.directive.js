juke.directive('songList', function(PlayerFactory){
	return {
		restrict: 'E',
		templateUrl: '/js/songList/templates/songList.html',
		scope: {
			songs: '='
		},
		link: function (scope, element, attr){
			angular.extend(scope, PlayerFactory);
		  scope.isPlaying = function (song) {
		    return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
		  };

		  scope.toggle = function (song) {
		    if (song !== PlayerFactory.getCurrentSong()) {
		      PlayerFactory.start(song, scope.songs);
		    } else if ( PlayerFactory.isPlaying() ) {
		      PlayerFactory.pause();
		    } else {
		      PlayerFactory.resume();
		    }
		  };

		  scope.getCurrentSong = function () {
		    return PlayerFactory.getCurrentSong();
		  };
		}
	}
})

juke.directive('doubleClick', function(){
	return {
		restrict: 'A',
		scope: {
			uponDoubleClick: '&doubleClick'
		},
		link: function(scope, element, attrs){
			element.on('dblclick', function(){
				console.log(scope);
				scope.uponDoubleClick();
			});
		}
	}
})