'use strict';

/**
 * @ngdoc directive
 * @name musicFrontApp.directive:recommendPlaylist
 * @description
 * # recommendPlaylist
 */
angular.module('musicFrontApp')
  .directive('recommendPlaylist', function () {
    return {
      templateUrl: 'views/discover/recommend-playlist.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
