(function () {
    var app = angular.module('timer-directive', []);

    app.directive('timer', function(){

        return{
            restrict: 'E',
            templateUrl: 'public/views/timer.html',
            controller: function() {
                this.description = "This is an example job";
                this.code = "1234";
                this.time = 1234;
                this.adjust = 0;
            },
            controllerAs: "timer"
        };
    });
})();
