'use strict';

/**
 * @ngdoc function
 * @name musicFrontApp.controller:DiscoverDiscoverCtrl
 * @description
 * # DiscoverDiscoverCtrl
 * Controller of the musicFrontApp
 */
angular.module('musicFrontApp')
  .controller('DiscoverCtrl', ['$interval', function ($interval) {
    var jumbotronImages = [
      { index: 0, src: '/images/jumbotron1.jpg', bgColor: '#2D1A30', href: '/images/jumbotron1.jpg' },
      { index: 1, src: '/images/jumbotron2.jpg', bgColor: '#EBF6F8', href: '/images/jumbotron2.jpg' },
      { index: 2, src: '/images/jumbotron3.jpg', bgColor: '#083F44', href: '/images/jumbotron3.jpg' },
      { index: 3, src: '/images/jumbotron4.jpg', bgColor: '#E7D5BD', href: '/images/jumbotron4.jpg' },
      { index: 4, src: '/images/jumbotron5.jpg', bgColor: '#F16161', href: '/images/jumbotron5.jpg' },
      { index: 5, src: '/images/jumbotron6.jpg', bgColor: '#F0EEEF', href: '/images/jumbotron6.jpg' },
      { index: 6, src: '/images/jumbotron7.jpg', bgColor: '#B30401', href: '/images/jumbotron7.jpg' },
      { index: 7, src: '/images/jumbotron8.jpg', bgColor: '#E6F2F0', href: '/images/jumbotron8.jpg' },
    ]
    var _self = this
    var _lastClick = Date.now()
    var _now = _lastClick

    this.jumbotronImages = jumbotronImages
    this.currentIndex = 0

    function switchImage() {
      $interval(function () {
        _now = Date.now()
        if (_now - _lastClick > 4000) {
          _self.currentIndex = (_self.currentIndex + 1) % jumbotronImages.length
          _lastClick = _now
        }
      }, 4000)
    }

    switchImage()

    this.prevJumbotron = function () {
      this.currentIndex = (this.currentIndex - 1 > 0) ? this.currentIndex - 1 : this.jumbotronImages.length - 1
      _lastClick = Date.now()
    }

    this.nextJumbotron = function () {
      this.currentIndex = (this.currentIndex + 1 < this.jumbotronImages.length) ? this.currentIndex + 1 : 0
      _lastClick = Date.now()
    }

    this.goJumbotron = function (index) {
      this.currentIndex = index
      _lastClick = Date.now()
    }

  }]);
