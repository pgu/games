'use strict';

/**
 * @ngdoc function
 * @name gamesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gamesApp
 */
angular.module('gamesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
