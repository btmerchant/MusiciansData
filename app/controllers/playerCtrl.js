MusApp.controller('PlayerCtrl', ['$scope', '$location', 'Auth', '$firebaseArray',
  function($scope, $location, Auth, $firebaseArray) {
    var ref = new Firebase('https://musicon.firebaseio.com');
    var user = ref.getAuth();
    var currentPlayer = user.uid;



    var playerRef = new Firebase('https://musicon.firebaseio.com/players');
    var players = $firebaseArray(playerRef);

    console.log(players);
    players.$loaded(function () {
      this.player = players.$getRecord(currentPlayer);
      console.log('user', this.player.firstName);
      $scope.playersFirstName = this.player.firstName;
      $scope.playersLastName = this.player.lastName;
    })

    // console.log('playerRef', playerRef);
    // console.log('currentPlayer', currentPlayer);
    // console.log('player', this.player);
    // console.log('name',this.player.firstName);

  }]);
