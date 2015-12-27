MusApp.controller('PlayerCtrl', ['$scope', '$location', 'Auth', '$firebaseArray',
  function($scope, $location, Auth, $firebaseArray) {
    var ref = new Firebase('https://musicon.firebaseio.com');
    var user = ref.getAuth();
    console.log("User = ",this.user);
    var currentPlayer = user.uid;
    console.log("CurrentPlayer = ", currentPlayer);

    var playerRef = new Firebase('https://musicon.firebaseio.com/players');
    var players = $firebaseArray(playerRef);

    console.log(players);
    players.$loaded(function () {
      this.player = players.$getRecord(currentPlayer);
      console.log('user', this.player.firstName);
      $scope.player = this.player;
      // $scope.playersFirstName = this.player.firstName;
      // $scope.playersLastName = this.player.lastName;
      // plob.uid = currentPlayer;
      // plob.firstName = this.player.firstName;
      // plob.lastName = this.player.lastName;
      console.log("Global Player= ",$scope.player);//Verify Global object
    })
  }]);
