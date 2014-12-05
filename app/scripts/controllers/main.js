'use strict';

/**
 * @ngdoc function
 * @name gamesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gamesApp
 */
angular.module('gamesApp')
  .controller('MainCtrl', function ($scope, $http) {

    $http.get('http://games.apispark.net/v1/pictures/')
      .then(function (response) {
        $scope.pictures = response.data;
        console.log($scope.pictures);
      });

  });
