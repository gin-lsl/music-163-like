'use strict';

/**
 * @ngdoc directive
 * @name musicFrontApp.directive:navbarTop
 * @description
 * # navbarTop
 */
angular.module('musicFrontApp')
  .directive('navBarTop', ['$http', 'appName', 'userService', 'authService', function ($http, appName, userService, authService) {
    return {
      templateUrl: 'views/nav-bar-top.html',
      restrict: 'E',
      scope: {
        // currentUser: '='
      },
      controllerAs: 'navBarTopCtrl',
      controller: function () {
        var vm = this
        vm.user = authService.user
        vm.add = authService.add
        vm.currentUser = null
        vm.test = 'hehe in directive'
        vm.appName = appName
        vm.currentActiveIndex = 0
        vm.navs = [
          {
            active: true,
            href: '/',
            text: '发现音乐',
            subs: [
              { active: true, href: '/discover', text: '推荐' },
              { active: false, href: '/discover/toplist', text: '排行榜' },
              { active: false, href: '/discover/playlist', text: '歌单' },
              { active: false, href: '/discover/djradio', text: '主播电台' },
              { active: false, href: '/discover/artist', text: '歌手' },
              { active: false, href: '/discover/album', text: '新碟上架' },
            ]
          },
          { active: false, href: '/my', text: '我的音乐' },
          { active: false, href: '/friend', text: '朋友' },
          { active: false, href: '/store/product', text: '商城' },
          { active: false, href: '/nmusician/web/recruit', text: '音乐人' },
          { active: false, href: '/download', text: '下载客户端' },
        ]

        vm.active = function (_index) {
          vm.navs[_index].active = true
          vm.navs[vm.currentActiveIndex].active = false
          vm.currentActiveIndex = _index
        }

        var _currentUserInfo
        var _currentUserHasLogin = false

        vm.activeSub = function (_sub) {
          vm.navs[vm.currentActiveIndex].subs.map(function (_ele) {
            _ele.active = false
          })
          _sub.active = true
        }
        $http.get('http://localhost:5500/users/368da9d06c6aea72')
          .then(function (data) {
            console.log(data)
            _currentUserInfo = data.data
            _currentUserHasLogin = true
            userService.setCurrentUser(data.data)
            vm.currentUser = userService.getCurrentUser()
          })
        vm.toggleCurrentUser = function () {
          console.log('_currentUserHasLogin: ' + _currentUserHasLogin)
          userService.setCurrentUser(_currentUserHasLogin ? _currentUserInfo : null)
          vm.currentUser = _currentUserHasLogin ? _currentUserInfo : null
          _currentUserHasLogin = !_currentUserHasLogin
        }

      },
    };
  }]);
