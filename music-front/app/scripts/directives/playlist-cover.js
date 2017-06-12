'use strict';

/**
 * @ngdoc directive
 * @name musicFrontApp.directive:playlistCover
 * @description
 * # playlistCover
 */
angular.module('musicFrontApp')
  .directive('playlistCover', function () {
    return {
      templateUrl: 'views/parts/playlist-cover.html',
      restrict: 'E',
      scope: {
        playlistInfo: '=playlist'
      },
      // link: function (scope, ele, attrs) {
      //   console.log(attrs.playlist)
      //   scope.playlistInfo = angular.fromJson(attrs.playlist)
      // }
    };
  });
