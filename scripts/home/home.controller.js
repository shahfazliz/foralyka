/*global angular */
(function () {
    'use strict';
    
    function HomeController() {
        var self = this,
            slides = [{
                image : 'images/sildes/106057.png'
            }]
        
        self.slides = slides;
    }
    
    HomeController.$inject = [];
    
    angular.module('Home').controller('HomeController', HomeController);
}());