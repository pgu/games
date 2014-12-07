'use strict';

/**
 * @ngdoc function
 * @name gamesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gamesApp
 */
angular.module('gamesApp')
  .controller('AnimalsCtrl', function ($scope, $http) {

    $http.get('http://games.apispark.net/v1/pictures/')
      .then(function (response) {

        var pictures = response.data.list;

        $scope.covers = _.filter(pictures, function(picture) {
          return picture.is_cover === 'TRUE';
        });

      });

  });
