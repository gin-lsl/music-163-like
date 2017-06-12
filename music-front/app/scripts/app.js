'use strict';

/**
 * @ngdoc overview
 * @name musicFrontApp
 * @description
 * # musicFrontApp
 *
 * Main module of the application.
 */
angular
  .module('musicFrontApp', [
    'ngAnimate',
    // 'ngCookies',
    // 'ngResource',
    'ngRoute',
    // 'ngSanitize',
    // 'ngTouch'
  ])
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/discover/discover.html',
        controller: 'DiscoverCtrl',
        controllerAs: 'discover'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/discover', {
        templateUrl: 'views/discover/discover.html',
        controller: 'DiscoverCtrl',
        controllerAs: 'discover'
      })
      .when('/playlist/:id', {
        templateUrl: 'views/playlist-or-album.html',
        controller: 'PlaylistCtrl',
        controllerAs: 'pc'
      })
      .when('/album', {
        templateUrl: 'views/playlist-or-album.html',
        controller: 'AlbumCtrl',
        controllerAs: 'ac'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(false).hashPrefix('!')
  }]);
