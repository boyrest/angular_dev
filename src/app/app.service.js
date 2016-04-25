angular.module('TEST')
    .factory('appService', ['$q', '$http', 'api', function($q, $http, api) {
        var appService = {};
        var apiRoute = api.isDev ? api.devRoute : api.proRoute;

        appService.logout = function() {
            var deferred = $q.defer();
            $http.get(apiRoute + '/logout').then(function(res) {
                console.log(res.data);
                deferred.resolve(res.data);
            }, deferred.reject);

            return deferred.promise;
        };
        return appService;
    }]);