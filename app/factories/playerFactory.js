MusApp.factory('Player', ['firebase',
  function(firebase) {
    var ref = new Firebase('https://musicon.firebaseio.com/players');
    ref.once("value", function (snapshot) {
      var players = snapshot.val();
    })
  }
  return players;
]);
