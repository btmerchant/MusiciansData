MusApp.controller('AuthCtrl', ['Auth', '$firebaseAuth', '$firebaseArray','$location',
  function(Auth, $firebaseAuth, $firebaseArray, $location) {
    var aScope = this;
    var playerId;
    var fireRef = new Firebase('https://musicon.firebaseio.com/');
    var ref = new Firebase('https://musicon.firebaseio.com/players');
    var userRef = $firebaseArray(ref);
    aScope.register = function() {
      var newPlayer = {
        email: aScope.email,
        password: aScope.password,
        firstName: aScope.firstName,
        lastName: aScope.lastName
      };
      console.log('email', aScope.email);
      Auth.$createUser({
        email: newPlayer.email,
        password: newPlayer.password
      }).then(function(playerData) {
        console.log('Player created with uid: ', playerData.uid);

        var userId = playerData.uid;
        //var myUserRef = userRef.child(userId);
        ref.child(userId).set({
            email: aScope.email,
            firstName: aScope.firstName,
            lastName: aScope.lastName
        });
        $location.path('/');
      }).catch(function(error) {
        aScope.error = error;
        console.log('error', error);
      });
    };

    aScope.login = function() {
      console.log('email', aScope.email);
      Auth.$authWithPassword({
        email: aScope.email,
        password: aScope.password
      }).then(function(authData) {
        console.log('Logged in as: ', authData.uid);
        // playerFactory.setPlayer(authData);
        // playerFactory.setGroup(authData);
        // playerId = authData.password.email;
        $location.path('/player');
      }).catch(function(error) {
        aScope.error = error;
        console.log('Authentication failed:', error);
      });
    };

    aScope.logout = function() {
      console.log('logging out');
        Auth.$unauth();
        $location.path('/');
    };

    aScope.removePlayer = function() {

      Auth.$removeUser({
        email: aScope.email,
        password: aScope.password
      }).then(function() {
        aScope.message = "Player removed!"
        console.log(aScope.message);
      }).catch(function(error) {
        aScope.error = error;
      });
    };

    aScope.checkIn = function() {
      if (playerId === true) {
        console.log('It is true!')
        return playerId;
      }
    }
}]);
