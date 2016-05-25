/*global angular */
(function () {
    'use strict';
    
    function HomeController() {
        var self = this,
            slides = [{
                id: 1,
                image : 'images/slides/106057.png',
                text: 'lalala'
            }, {
                id: 2,
                image: 'images/slides/Layer10.png'
            }];
        
        self.slides = slides;
    }
    
    HomeController.$inject = [];
    
    angular.module('Home').controller('HomeController', HomeController);
}());