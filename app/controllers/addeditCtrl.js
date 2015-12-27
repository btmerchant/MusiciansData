MusApp.controller('AddEditCtrl', ['$scope', '$location', 'Auth', 'AddEditFactory', '$firebaseArray',
  function($scope, $location, Auth, AddEditFactory, $firebaseArray) {
    var ref = new Firebase('https://musicon.firebaseio.com');
    var user = ref.getAuth();
    var currentPlayer = user.uid;

    var songsRef = new Firebase('https://musicon.firebaseio.com/songs');
    var songs = $firebaseArray(songsRef);

    console.log(songs);
    songs.$loaded(function () {
      this.song = songs.$getRecord(currentPlayer);
      console.log('songs', songs);
      // $scope.playersFirstName = this.player.firstName;
      // $scope.playersLastName = this.player.lastName;
    })
  }]);
