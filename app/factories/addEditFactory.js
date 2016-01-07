// MusApp.factory('AddEditFact', ['firebase',
//   function(firebase) {
//     var ref = new Firebase('https://musicon.firebaseio.com/songs');
//     ref.once("value", function (snapshot) {
//       var songs = snapshot.val();
//     })
//   }
//   return songs;
// ]);


// app.factory('items', function() {
//     var items = [];
//     var itemsService = {};

//     itemsService.add = function(item) {
//         items.push(item);
//     };
//     itemsService.list = function() {
//         return items;
//     };

//     return itemsService;
// });

// function Ctrl1($scope,items) {
//     $scope.list = items.list;
// }

// function Ctrl2($scope, items) {
//     $scope.add = items.add;
// }
