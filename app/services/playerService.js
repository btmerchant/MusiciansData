// MusApp.service('PlayerService', function(Auth, $firebaseArray, $firebaseObject, $route) {

//   var playerService = {};
//   var groupsArray = [];
//   var songsArray = [];
//   var playerArray = [];
//   var loggedInPlayer, refSongs, refPlayer;

//     this.setPlayer = function(authData) {
//       loggedInPlayer = authData;
//       console.log('loggedInPlayer', loggedInPlayer);
//       refSongs = new Firebase('https://musicon.firebaseio.com/players/' + loggedInPlayer.uid + '/songs/');
//       songsArray = $firebaseArray(refSongs);
//       console.log('refSongs', refSongs);
//       console.log('songsArray', songsArray);
//       refPlayer = new Firebase('http://musicon.firebaseio.com/players/' + loggedInPlayer.uid);
//       playerArray = $firebaseArray(refPlayer);
//       console.log('refPlayer', refPlayer);
//       console.log('playerArray', playerArray);
//       return songsArray, playerArray;
//     };

//     this.setGroup = function(authData) {
//       loggedInPlayer = authData;
//       console.log('loggedInPlayer', loggedInPlayer);
//       ref = new Firebase('https://musicon.firebaseio.com/players/' + loggedInPlayer.uid + '/groups/');
//       groupsArray = $firebaseArray(ref);
//       console.log('ref', ref);
//       console.log('groupsArray', groupsArray);
//       return groupsArray;
//     };

    // this.addSong = function(newSong) {
    //   console.log('songsArray', songsArray);
    //   songsArray.$add(newSong)
    //   .then(function(ref) {
    //     var id = ref.key();
    //     console.log('added song with id ' + id);
    //   });
    // };

    // this.editSong = function(songToEdit) {
    //   var index = songsArray.$indexFor(songToEdit.id);
    //   console.log('index', index);
    //   songsArray[index] = songToEdit;
    //   songsArray.$save(index);
    // };

    // this.getSongsArray = function() {
    //   console.log('songsArray', songsArray);
    //   return songsArray;
    // };









// service is just a constructor function
  // that will be called with 'new'
// this.sayHello = function(name) {
//      return "Hi " + name + "!";
//   };
// });
