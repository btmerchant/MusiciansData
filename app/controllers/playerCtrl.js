MusApp.controller('PlayerCtrl', ['$scope', '$location', 'Auth', '$firebaseArray',
  function($scope, $location, Auth, $firebaseArray) {
    console.log('PlayerCtrl');
    var ref = new Firebase('https://musicon.firebaseio.com');
    var user = ref.getAuth();
    var playerRef = new Firebase('https://musicon.firebaseio.com/players');
    var player = $firebaseArray(playerRef);
    var songsRef = new Firebase('https://musicon.firebaseio.com/songs');
    var songs = $firebaseArray(songsRef);

    this.currentUser = Auth.$getAuth().uid;
    console.log("User = ",this.currentUser);

    var playersRef = new Firebase('https://musicon.firebaseio.com/players');
    this.players = $firebaseArray(playersRef);
    console.log("players array", this.players);

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
