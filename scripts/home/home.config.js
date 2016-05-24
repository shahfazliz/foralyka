/*global angular */
(function () {
    'use strict';
    
    function Config($stateProvider, $urlRouterProvider) {
        $stateProvider.state('home', {
            url:            '/',
            templateUrl:    'scripts/home/home.html',
            controller:     'HomeController',
            controllerAs:   'HomeController'
        });
    }
    
    Config.$inject = ['$stateProvider', '$urlRouterProvider'];
    
    angular.module('Home').config(Config);
}());