var MusApp = angular.module('MusApp',['ngRoute', 'firebase']);


  MusApp.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/login.html',
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
      .when('/addedit', {
        templateUrl: 'partials/addedit.html',
        controller: 'AddeditCtrl as addeditCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
);


