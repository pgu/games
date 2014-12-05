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

    var encoded = btoa('a317c189-4849-40d1-8606-b0c08842316a:c9cb44e4-8bb0-4de5-b3c8-4595edaf22e6');
    var code = 'Basic ' + encoded;

    $http.get('http://games.apispark.net/v1/pictures/', { headers: { Authorization: code} })
      .then(function (response) {
        $scope.pictures = response.data;
        console.log($scope.pictures);
      });


  });
