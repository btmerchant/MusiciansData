MusApp.controller('AuthCtrl', ['Auth', '$firebaseAuth', '$firebaseArray','$location',
  function(Auth, $firebaseAuth, $firebaseArray, $location) {

    var playerId = '';
    var fireRef = new Firebase('https://musicon.firebaseio.com/');
    var ref = new Firebase('https://musicon.firebaseio.com/players');
    var userRef = $firebaseArray(ref);
    this.register = function() {
      var newPlayer = {
        email: this.email,
        password: this.password,
        firstName: this.firstName,
        lastName: this.lastName
      };
      console.log('email', this.email);
      Auth.$createUser({
        email: newPlayer.email,
        password: newPlayer.password
      }).then(function(playerData) {
        console.log('Player created with uid: ', playerData.uid);

        var userId = playerData.uid;
        //var myUserRef = userRef.child(userId);
        ref.child(userId).set({
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName
        });
        $location.path('/');
      }).catch(function(error) {
        this.error = error;
        console.log('error', error);
      });
    };

    this.login = function() {
      console.log('email', this.email);
      Auth.$authWithPassword({
        email: this.email,
        password: this.password
      }).then(function(authData) {
        console.log('Logged in as: ', authData.uid);
        // playerFactory.setPlayer(authData);
        // playerFactory.setGroup(authData);
        // playerId = authData.password.email;
        $location.path('/player');
      }).catch(function(error) {
        this.error = error;
        console.log('Authentication failed:', error);
      });
    };

    this.logout = function() {
        Auth.$unauth();
        this.message = "Player Logged Out";
        console.log("Logged out");
        $location.path('/');
    };

    this.removePlayer = function() {

      Auth.$removeUser({
        email: this.email,
        password: this.password
      }).then(function() {
        this.message = "Player removed!";
        console.log(this.message);
      }).catch(function(error) {
        this.error = error;
      });
    };

    this.checkIn = function() {
      if (playerId === true) {
        console.log('It is true!');
        return playerId;
      }
    };
}]);
