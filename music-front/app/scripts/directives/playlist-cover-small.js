'use strict';

/**
 * @ngdoc directive
 * @name musicFrontApp.directive:playlistCoverSmall
 * @description
 * # playlistCoverSmall
 */
angular.module('musicFrontApp')
  .directive('playlistCoverSmall', function () {
    return {
      templateUrl: 'views/parts/playlist-cover-small.html',
      restrict: 'E',
      scope: {
        playlist: '='
      },
      // controllerAs: 'pcs',
      // controller: function () {
      //   var vm = this
      // }
      // link: function postLink(scope, element, attrs) {
      //   element.text('this is the playlistCoverSmall directive');
      // }
    };
  });
