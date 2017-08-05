var MusApp = angular.module('MusApp',['ngRoute', 'firebase']);

  MusApp.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'AuthCtrl as authCtrl'
      })
      .when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'AuthCtrl as authCtrl'
      })
      .when('/register', {
        templateUrl: 'partials/register.html',
        controller: 'AuthCtrl as authCtrl'
      })
      .when('/player', {
        templateUrl: 'partials/player.html',
        controller: 'PlayerCtrl as playerCtrl'
      })
      .when('/group', {
        templateUrl: 'partials/group.html',
        controller: 'PlayerCtrl as playerCtrl'
      })
      .when('/addSong', {
        templateUrl: 'partials/addSong.html',
        controller: 'PlayerCtrl as playerCtrl'
      })
            .when('/addGroup', {
        templateUrl: 'partials/addGroup.html',
        controller: 'PlayerCtrl as playerCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
);


