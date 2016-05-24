/*global angular */
(function () {
    'use strict';
    
    function Config($urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
    }
    
    Config.$inject = ['$urlRouterProvider'];
    
    angular.module('App').config(Config);
}());