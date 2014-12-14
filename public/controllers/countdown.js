(function () {
    var app = angular.module('countdown-controller', []);

    app.directive('countdown', function(){

        return{
            restrict: 'E',
            templateUrl: '../public/views/countdown.html'
        };
    });
})();
