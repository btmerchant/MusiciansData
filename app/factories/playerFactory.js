MusApp.factory('playerFactory', ['Auth', '$firebaseArray', '$firebaseObject', '$route',
  function(Auth, $firebaseArray, $firebaseObject, $route) {
  var groupsArray = [];
  var songsArray = [];
  var playerArray = [];
  var loggedInPlayer, refSongs, refPlayer;

  return {

    setPlayer: function(authData) {
      loggedInPlayer = authData;
      console.log('loggedInPlayer', loggedInPlayer);
      refSongs = new Firebase('https://musicon.firebaseio.com/players/' + loggedInPlayer.uid + '/songs/');
      songsArray = $firebaseArray(refSongs);
      console.log('refSongs', refSongs);
      console.log('songsArray', songsArray);
      refPlayer = new Firebase('http://musicon.firebaseio.com/players/' + loggedInPlayer.uid);
      playerArray = $firebaseArray(refPlayer);
      console.log('refPlayer', refPlayer);
      console.log('playerArray', playerArray);
      return songsArray, playerArray;
    },

    setGroup: function(authData) {
      loggedInPlayer = authData;
      console.log('loggedInPlayer', loggedInPlayer);
      ref = new Firebase('https://musicon.firebaseio.com/players/' + loggedInPlayer.uid + '/groups/');
      groupsArray = $firebaseArray(ref);
      console.log('ref', ref);
      console.log('groupsArray', groupsArray);
      return groupsArray;
    },

    addSong: function(newSong) {
      console.log('songsArray', songsArray);
      songsArray.$add(newSong)
      .then(function(ref) {
        var id = ref.key();
        console.log('added song with id ' + id);
      });

    },

    editSong: function(songToEdit) {
      var index = songsArray.$indexFor(songToEdit.id);
      console.log('index', index);
      songsArray[index] = songToEdit;
      songsArray.$save(index);
    },

    getSongsArray: function() {
      console.log('songsArray', songsArray);
      return songsArray;
    }

  }; //end return

}]); //end factory definition
