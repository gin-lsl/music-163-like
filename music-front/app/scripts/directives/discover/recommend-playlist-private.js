'use strict';

/**
 * @ngdoc directive
 * @name musicFrontApp.directive:recommendPlaylistPrivate
 * @description
 * # recommendPlaylistPrivate
 */
angular.module('musicFrontApp')
  .directive('recommendPlaylistPrivate', [function () {
    return {
      templateUrl: 'views/discover/recommend-playlist-private.html',
      restrict: 'E',
      controllerAs: 'rpp',
      controller: function () {
        var vm = this
        vm.pls = [
          { playlistId: '', coverImageSrc: '/images/covers/cover9.jpg', playCount: 1, text: '「声控福利」让人耳朵怀孕的剧情歌', isFM: false },
          { playlistId: '', coverImageSrc: '/images/covers/cover10.jpg', playCount: 1, text: '探险手札050', isFM: true },
          { playlistId: '', coverImageSrc: '/images/covers/cover11.jpg', playCount: 1, text: '【日系/女声】至美天籁 咏唱灵魂幻化的音符', isFM: false },
        ]
      }
    };
  }]);
