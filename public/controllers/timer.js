(function () {
    var app = angular.module('timer-directive', []);

    app.directive('timer', function(){

        return{
            restrict: 'E',
            templateUrl: 'public/views/timer.html'
        };
    });
})();
