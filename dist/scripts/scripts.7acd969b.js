"use strict";angular.module("gamesApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]).run(["$http",function(a){var b=btoa("a317c189-4849-40d1-8606-b0c08842316a:c9cb44e4-8bb0-4de5-b3c8-4595edaf22e6");a.defaults.headers.common.Authorization="Basic "+b}]),angular.module("gamesApp").controller("MainCtrl",["$scope","$http",function(a,b){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"];var c=btoa("a317c189-4849-40d1-8606-b0c08842316a:c9cb44e4-8bb0-4de5-b3c8-4595edaf22e6"),d="Basic "+c;b.get("http://games.apispark.net/v1/pictures/",{headers:{Authorization:d}}).then(function(b){a.pictures=b.data,console.log(a.pictures)})}]);