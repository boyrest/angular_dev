angular.module('TEST')
    .factory('LoginService', ['$q', '$http', 'api', function($q, $http, api) {
        var loginService = {};
        var apiRoute = api.isDev ? api.devRoute : api.proRoute;

        loginService.login = function(data) {
            var deferred = $q.defer();
            console.log("####");
            debugger;
            $http.post(apiRoute + '/login',data).then(function(res) {
                deferred.resolve(res.data);
            }, deferred.reject);

            return deferred.promise;
        };
        return loginService;
    }]);