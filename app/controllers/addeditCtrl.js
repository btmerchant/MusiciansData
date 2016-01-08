MusApp.controller('AddEditCtrl', ['$scope', '$location', 'Auth', '$firebaseArray',
  function($scope, $location, Auth, $firebaseArray) {
    var ref = new Firebase('https://musicon.firebaseio.com');
    var user = ref.getAuth();
    var playersRef = new Firebase('https://musicon.firebaseio.com/players');
    var player = $firebaseArray(playersRef);
    var songsRef = new Firebase('https://musicon.firebaseio.com/songs');
    var songs = $firebaseArray(songsRef);

    songs.$loaded(function () {
      this.song = songs.$getRecord(user);
      console.log('songs', songs);
    });

    this.addSong = function() {

      songs.$add({
        uid: user,
        title: this.newSong.title
      });
      console.log('Added Song');
    };

  }]);
