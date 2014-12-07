"use strict";angular.module("gamesApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/animals.html",controller:"AnimalsCtrl"}).otherwise({redirectTo:"/"})}]).run(["$http",function(a){var b=btoa("a317c189-4849-40d1-8606-b0c08842316a:d85f54ee-448b-41ea-999b-f9e322d77001");a.defaults.headers.common.Authorization="Basic "+b}]),angular.module("gamesApp").controller("AnimalsCtrl",["$scope","$http",function(a,b){b.get("http://games.apispark.net/v1/pictures/").then(function(b){var c=b.data.list;a.pictures=_.map(c,function(a){var b=a.tags.split(","),c=_.map(b,function(a){var b=a.split(":"),c=b[0].trim(),d=b[1].trim(),e={};return e[c]=d,e});return _.reduce(c,function(a,b){return _.merge(a,b),a},_.cloneDeep(a))}),a.covers=_.filter(a.pictures,function(a){return"TRUE"===a.is_cover})}),a.displayAnimal=function(b,c){$("html, body").animate({scrollTop:0},"slow");var d=_.filter(c,function(a){return a.animal===b.animal}),e=_.random(0,_(d).size()-1);a.selectedAnimalPicture=d[e]},a.removeSelectedAnimalPicture=function(){a.selectedAnimalPicture=null}}]);