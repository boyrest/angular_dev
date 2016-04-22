'use strict';

angular.module('TEST')
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'app/login/login.html',
                controller: "LoginController"
            });
        $urlRouterProvider.otherwise('/welcome');
    });