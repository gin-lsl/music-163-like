'use strict';

/**
 * @ngdoc directive
 * @name musicFrontApp.directive:recommendPlaylistHot
 * @description
 * # recommendPlaylistHot
 */
angular.module('musicFrontApp')
  .directive('recommendPlaylistHot', function () {
    return {
      templateUrl: 'views/discover/recommend-playlist-hot.html',
      restrict: 'E',
      controllerAs: 'rph',
      controller: function () {
        var vm = this
        /**
         * playlistId - 此歌单的id
         * coverImage - 封面图片地址
         * playCount - 播放数量
         * text - 描述文本
         * isFM - 是否是[电台节目]
         */
        vm.playlistHotList =  [
          { playlistId: '', coverImageSrc: '/images/covers/cover1.jpg', playCount: 19720000, text: '麻麻，我想和他们合唱!我想和你唱特辑', isFM: false },
          { playlistId: '', coverImageSrc: '/images/covers/cover2.jpg', playCount: 1730000, text: '[民谣与诗]晴空与海潮交织的韵和乐章', isFM: false },
          { playlistId: '', coverImageSrc: '/images/covers/cover3.jpg', playCount: 2740000, text: '[古风女声]扶柔倾国色，风华绝世人', isFM: false },
          { playlistId: '', coverImageSrc: '/images/covers/cover4.jpg', playCount: 49173, text: '应念岭表经年，肝胆皆冰雪', isFM: true },
          { playlistId: '', coverImageSrc: '/images/covers/cover5.jpg', playCount: 640000, text: '[二次元女声]精致的搭配，绘构了美好', isFM: false },
          { playlistId: '', coverImageSrc: '/images/covers/cover6.jpg', playCount: 23489, text: '明快、优雅--海顿C大调大提琴协奏曲', isFM: true },
          { playlistId: '', coverImageSrc: '/images/covers/cover7.jpg', playCount: 28810, text: '[华语民谣]最执着的原创民谣歌手/刘健', isFM: false },
          { playlistId: '', coverImageSrc: '/images/covers/cover8.jpg', playCount: 44291, text: '主播朵儿：有用的人，不怕长得丑-晚睡', isFM: true }
        ]
      },
      // link: function postLink(scope, element, attrs) {
      //   scope.playlistHotList = [
      //     { playlistId: '', coverImageSrc: '/images/covers/cover1.jpg', playCount: 19720000, text: '麻麻，我想和他们合唱!我想和你唱特辑', isFM: false },
      //     { playlistId: '', coverImageSrc: '/images/covers/cover2.jpg', playCount: 1730000, text: '[民谣与诗]晴空与海潮交织的韵和乐章', isFM: false },
      //     { playlistId: '', coverImageSrc: '/images/covers/cover3.jpg', playCount: 2740000, text: '[古风女声]扶柔倾国色，风华绝世人', isFM: false },
      //     { playlistId: '', coverImageSrc: '/images/covers/cover4.jpg', playCount: 49173, text: '应念岭表经年，肝胆皆冰雪', isFM: true },
      //     { playlistId: '', coverImageSrc: '/images/covers/cover1.jpg', playCount: 640000, text: '[二次元女声]精致的搭配，绘构了美好', isFM: false },
      //     { playlistId: '', coverImageSrc: '/images/covers/cover2.jpg', playCount: 23489, text: '明快、优雅--海顿C大调大提琴协奏曲', isFM: true },
      //     { playlistId: '', coverImageSrc: '/images/covers/cover3.jpg', playCount: 28810, text: '[华语民谣]最执着的原创民谣歌手/刘健', isFM: false },
      //     { playlistId: '', coverImageSrc: '/images/covers/cover4.jpg', playCount: 44291, text: '主播朵儿：有用的人，不怕长得丑-晚睡', isFM: true }
      //   ]
      // }
    };
  });
