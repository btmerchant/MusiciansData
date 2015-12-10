MusApp.controller('AuthCtrl', ['Auth', '$firebaseAuth', 'playerFactory', '$location',
  function(Auth, $firebaseAuth, playerFactory, $location) {

    var aScope = this;
    var playerId;

    aScope.register = function() {
      console.log('email', aScope.email);
      Auth.$createUser({
        email: aScope.email,
        password: aScope.password
      }).then(function(playerData) {
        console.log('Player created with uid: ', playerData.uid);
        $location.path('/');
      }).catch(function(error) {
        aScope.error = error;
        console.log('error', error);
      });
      // aScope.login();
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
        playerId = authData.password.email;
        console.log('playerId', playerId);
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
