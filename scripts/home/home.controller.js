/*global angular */
(function () {
    'use strict';
    
    function HomeController() {
        var self = this,
            slides = [{
                id: 1,
                image : 'images/slides/106057.png',
                title1: 'INDIVIDUAL',
                title2: 'PROGRAMS',
                slogan: 'Empowering Confident Leaders for Change'
            }, {
                id: 2,
                image: 'images/slides/Layer10.png',
                title1: 'INDIVIDUAL',
                title2: 'PROGRAMS',
                slogan: 'Empowering Confident Leaders for Change'
            }];
        
        self.slides = slides;
    }
    
    HomeController.$inject = [];
    
    angular.module('Home').controller('HomeController', HomeController);
}());