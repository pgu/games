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

        var raw_pictures = response.data.list;

        $scope.pictures = _.map(raw_pictures, function (raw_picture) {

          var tags = raw_picture.tags.split(',');

          var keys_values = _.map(tags, function (tag) {
            var keyValue = tag.split(':');

            var key = keyValue[0].trim();
            var val = keyValue[1].trim();

            var kv = {};
            kv[key] = val;
            return kv;

          });

          return _.reduce(keys_values, function (picture, key_value) {

            _.merge(picture, key_value);
            return picture;

          }, _.cloneDeep(raw_picture));
        });

        $scope.covers = _.filter($scope.pictures, function (picture) {
          return picture.is_cover === 'TRUE';
        });

      });

    $scope.displayAnimal = function (selectedPicture, pictures) {

      $('html, body').animate({ scrollTop: 0 }, 'slow');

      var selectedAnimalPictures = _.filter(pictures, function (picture) {
        return picture.animal === selectedPicture.animal;
      });

      var idx = _.random(0, _(selectedAnimalPictures).size() - 1);
      $scope.selectedAnimalPicture = selectedAnimalPictures[idx];

    };

    $scope.removeSelectedAnimalPicture = function () {
      $scope.selectedAnimalPicture = null;
    };


  });
