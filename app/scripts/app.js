'use strict';

/**
 * @ngdoc overview
 * @name gamesApp
 * @description
 * # gamesApp
 *
 * Main module of the application.
 */
angular
  .module('gamesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

  .run(function ($http) {

    var encoded = btoa('a317c189-4849-40d1-8606-b0c08842316a:d85f54ee-448b-41ea-999b-f9e322d77001');
    $http.defaults.headers.common.Authorization = 'Basic ' + encoded;

  })
;
