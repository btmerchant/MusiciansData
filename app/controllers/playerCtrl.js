MusApp.controller('PlayerCtrl', ['$scope', '$location', 'Auth', '$firebaseArray',
  function($scope, $location, Auth, $firebaseArray) {
    console.log('PlayerCtrl');
    var ref = new Firebase('https://musicon.firebaseio.com');
    var playersRef = new Firebase('https://musicon.firebaseio.com/players');
    var songsRef = new Firebase('https://musicon.firebaseio.com/songs');
    var player = $firebaseArray(playersRef);
    var songs = $firebaseArray(songsRef);
    this.user = Auth.$getAuth().uid;
    console.log("user", this.user);
    this.players = $firebaseArray(playersRef);
    console.log("players array", this.players);

     songs.$loaded(function () {
      this.song = songs.$getRecord(this.user);
      console.log('songs', songs);
    });

    this.addSong = function() {
      console.log("addSong Function");
      songs.$add({
        uid: this.user,
        title: this.newSong.title
      });
      console.log('Added Song');
    };

  }]);
