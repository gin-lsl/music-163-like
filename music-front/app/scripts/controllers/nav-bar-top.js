'use strict';

/**
 * @ngdoc function
 * @name musicFrontApp.controller:NavBarTopCtrl
 * @description
 * # NavBarTopCtrl
 * Controller of the musicFrontApp
 */
angular.module('musicFrontApp')
  .controller('NavBarTopCtrl', ['$scope', 'appName', function ($scope, appName) {
    // $scope.appName = appName
    // // $scope.user = userService.currentUser || {}
    // $scope.currentActiveIndex = 0
    // $scope.$watch('userService.currentUser', function (newValue) {
    //   console.log(newValue)
    // })
    // $scope.navs = [
    //   {
    //     active: true,
    //     href: '/',
    //     text: '发现音乐',
    //     subs: [
    //       { active: true, href: '/discover', text: '推荐' },
    //       { active: false, href: '/discover/toplist', text: '排行榜' },
    //       { active: false, href: '/discover/playlist', text: '歌单' },
    //       { active: false, href: '/discover/djradio', text: '主播电台' },
    //       { active: false, href: '/discover/artist', text: '歌手' },
    //       { active: false, href: '/discover/album', text: '新碟上架' },
    //     ]
    //   },
    //   { active: false, href: '/my', text: '我的音乐' },
    //   { active: false, href: '/friend', text: '朋友' },
    //   { active: false, href: '/store/product', text: '商城' },
    //   { active: false, href: '/nmusician/web/recruit', text: '音乐人' },
    //   { active: false, href: '/download', text: '下载客户端' },
    // ]

    // $scope.active = function (_index) {
    //   $scope.navs[_index].active = true
    //   $scope.navs[$scope.currentActiveIndex].active = false
    //   $scope.currentActiveIndex = _index
    // }

    // $scope.activeSub = function (_sub) {
    //   $scope.navs[$scope.currentActiveIndex].subs.map(function (_ele) {
    //     _ele.active = false
    //   })
    //   _sub.active = true
    // }
    // $scope.test = 'hehe in controller'
  }])
