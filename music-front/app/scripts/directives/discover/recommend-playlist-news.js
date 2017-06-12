'use strict';

/**
 * @ngdoc directive
 * @name musicFrontApp.directive:recommendPlaylistNews
 * @description
 * # recommendPlaylistNews
 */
angular.module('musicFrontApp')
  .directive('recommendPlaylistNews', function () {
    return {
      templateUrl: 'views/discover/recommend-playlist-news.html',
      restrict: 'E',
      controllerAs: 'rpn',
      controller: function () {
        var vm = this
        vm.plsLeft = [
          {
            id: '',
            coverImageSrc: '/images/covers100/cover1.jpg',
            title: '放 & 披风',
            musicians: [
              { musician: '陈奕迅', musicianId: '' }
            ]
          },
          {
            id: '',
            coverImageSrc: '/images/covers100/cover2.jpg',
            title: '欢乐颂2电影原声带',
            musicians: [
              { musician: '群星', musicianId: '' }
            ]
          },
          {
            id: '',
            coverImageSrc: '/images/covers100/cover3.jpg',
            title: '군주 - 가면의 주인 OST',
            musicians: [
              { musician: 'V.A.', musicianId: '' }
            ]
          },
          {
            id: '',
            coverImageSrc: '/images/covers100/cover4.jpg',
            title: 'hopeless fountain',
            musicians: [
              { musician: 'Halsey', musicianId: '' }
            ]
          },
          {
            id: '',
            coverImageSrc: '/images/covers100/cover5.jpg',
            title: 'There Fro You',
            musicians: [
              { musicianId: '', musician: 'Martin Garrix' },
              { musicianId: '', musician: 'Troye Sivan' }
            ],
          }
        ]
        vm.plsRight = [
          {
            id: '',
            coverImageSrc: '/images/covers100/cover6.jpg',
            title: 'PRODUCE 100 - 35 Boys 5 Concepts',
            musicians: [
              { musician: 'PRODUCE 101', musicianId: '' }
            ]
          },
          {
            id: '',
            coverImageSrc: '/images/covers100/cover7.jpg',
            title: '我想和你唱 第二季',
            musicians: [
              { musician: '群星', musicianId: '' }
            ]
          },
          {
            id: '',
            coverImageSrc: '/images/covers100/cover8.jpg',
            title: 'Wonder Woman: Original Motion Picture Soundtrack',
            musicians: [
              { musician: 'Rupert Gregson', musicianId: '' },
              { musician: 'Sia', musicianId: '' },
              { musician: 'Labrinth', musicianId: '' }
            ]
          },
          {
            id: '',
            coverImageSrc: '/images/covers100/cover9.jpg',
            title: '2017跨界歌王 第八期',
            musicians: [
              { musician: '群星', musicianId: '' }
            ]
          },
          {
            id: '',
            coverImageSrc: '/images/covers100/cover10.jpg',
            title: 'LONELY',
            musicians: [
              { musician: 'Sistar', musicianId: '' }
            ]
          }
        ]
        vm.inLeft = true

        vm.styles = [
          { left: 0},
          { left: 645},
        ]

        /* 方法 */
        vm.rollLeft = function () {
          if (vm.inLeft) {
            return
          }
          vm.styles[0].left += 645
          vm.styles[1].left += 645
          vm.inLeft = !vm.inLeft
        }
        vm.rollRight = function () {
          if (!vm.inLeft) {
            return
          }
          vm.styles[0].left -= 645
          vm.styles[1].left -= 645
          vm.inLeft = !vm.inLeft
        }
      }
      // link: function postLink(scope, element, attrs) {
      // }
    };
  });
