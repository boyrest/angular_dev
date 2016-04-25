'use strict'

angular.module('TEST', ['ui.router', 'ui.bootstrap']).
constant('api', {
    proRoute: 'http://strl099049.mso.net:8082/ida-api/api',
    devRoute: '/eres-backend/api',
    isDev: true
}).
run(['$rootScope', '$location', '$http', '$templateCache', '$state', 'api',
    function($rootScope, $location, localStorageService, $http, $templateCache, $state, api) {
        $location.path('/login');
    }
]);