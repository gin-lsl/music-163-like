'use strict';

/**
 * @ngdoc directive
 * @name musicFrontApp.directive:recommendPlaylistToplist
 * @description
 * # recommendPlaylistToplist
 */
angular.module('musicFrontApp')
  .directive('recommendPlaylistToplist', ['$http', function ($http) {
    return {
      templateUrl: 'views/discover/recommend-playlist-toplist.html',
      restrict: 'E',
      controllerAs: 'rpt',
      controller: function () {
        var vm = this
        $http.get('http://localhost:5500/songs').then(function (data) {
          vm.topPlaylists = data.data
        })
      }
      // link: function postLink(scope, element, attrs) {
      // }
    };
  }]);
