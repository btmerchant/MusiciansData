MusApp.factory('Auth', ['$firebaseAuth',
  function($firebaseAuth) {
    var ref = new Firebase('https://musicon.firebaseio.com/');
    return $firebaseAuth(ref);
  }
]);
