(function () {
    var app = angular.module('countdown-controller', []);

    app.directive('CountdownDirective', function(){

        return{
            restrict: 'E',
            templateUrl: 'views/countdown.html'
        };
    });
})();
