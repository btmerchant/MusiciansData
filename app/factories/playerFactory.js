MusApp.factory('PlayerFact', ['Auth', '$firebaseArray', "$scope",
  function(Auth, $firebaseArray, $scope) {

    var player = {};// this will contain all data for yhe current player(user)
    var fireRef = new Firebase('https://musicon.firebaseio.com');
    var user = fireRef.getAuth();
    console.log("User = ",this.user);
    var currentPlayer = user.uid;
    console.log("CurrentPlayer = ", currentPlayer);
    var playersRef = new Firebase('https://musicon.firebaseio.com/players');
    var players = $firebaseArray(playersRef);

    console.log('players= ', players);
    players.$loaded(function () {
      console.log('user = ', player.firstName);
      $scope.player = player;//put it on the global scope
      // $scope.playersFirstName = this.player.firstName;
      // $scope.playersLastName = this.player.lastName;
      // plob.uid = currentPlayer;
      // plob.firstName = this.player.firstName;
      // plob.lastName = this.player.lastName;
      console.log("Global Player= ",$scope.player);//Verify Global object
    });
    return player;
  }]);

