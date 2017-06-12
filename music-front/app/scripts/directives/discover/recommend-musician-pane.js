'use strict';

/**
 * @ngdoc directive
 * @name musicFrontApp.directive:recommendMusicianPane
 * @description
 * # recommendMusicianPane
 */
angular.module('musicFrontApp')
  .directive('recommendMusicianPane', function () {
    return {
      templateUrl: 'views/discover/recommend-musician-pane.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
