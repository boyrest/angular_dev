angular.module('TEST')
    .factory('LoginService', ['$q', '$http', 'api', function(localStorageService, $q, $http, api) {
        var loginService = {};
        var apiRoute = api.isDev ? api.devRoute : api.proRoute;

        loginService.logout = function() {
            var deferred = $q.defer();
            $http.get(apiRoute + '/logout').then(function(res) {
                deferred.resolve(res.data);
            }, deferred.reject);

            return deferred.promise;
        };
        return loginService;
    }]);