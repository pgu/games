"use strict";angular.module("gamesApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]).run(["$http",function(a){var b=btoa("a317c189-4849-40d1-8606-b0c08842316a:d85f54ee-448b-41ea-999b-f9e322d77001");a.defaults.headers.common.Authorization="Basic "+b}]),angular.module("gamesApp").controller("MainCtrl",["$scope","$http",function(a,b){b.get("http://games.apispark.net/v1/pictures/").then(function(b){var c=b.data.list;a.covers=_.filter(c,function(a){return"TRUE"===a.is_cover})})}]);