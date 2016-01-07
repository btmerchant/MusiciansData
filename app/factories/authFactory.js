MusApp.factory('Auth', ['$firebaseAuth',
  function($firebaseAuth) {
    var ref = new Firebase('https://musicon.firebaseio.com/');
    var fireAuth = $firebaseAuth(ref);
    console.log('fireAuth= ', fireAuth);
    return fireAuth;
  }
]);
