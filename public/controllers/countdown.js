(function () {
    var app = angular.module('countdown-directive', []);

    app.directive('countdown', function(){

        return{
            restrict: 'E',
            templateUrl: 'public/views/countdown.html'
        };
    });
})();
