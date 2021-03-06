(function () {
    var app = angular.module('TimerApp', ['ngResource', 'ngMessages', 'ngRoute', 'mgcrea.ngStrap',
                                         'main-controller', 'countdown-directive', 'timer-directive']);

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
