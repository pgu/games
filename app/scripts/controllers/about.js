'use strict';

/**
 * @ngdoc function
 * @name gamesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gamesApp
 */
angular.module('gamesApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
