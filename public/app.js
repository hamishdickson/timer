(function () {
    var app = angular.module('TimerApp', ['ngResource', 'ngMessages', 'ngRoute', 'ngcrea.ngStrap',
                                         'main-controller', 'countdown-controller']);

    app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(true);
        
        $routeProvider
            .when('/', {
                templateUrl: 'public/views/home.html',
                controller: 'MainController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
})();
