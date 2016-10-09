'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/home',{
        redirectTo: '/home',
        templateUrl: "homePage/home-page-template.html"
      })
      .otherwise({
        redirectTo: '/home',
        templateUrl: "homePage/home-page-template.html"
      });
}]);
