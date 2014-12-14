(function () {
    var app = angular.module('timer-directive', []);

    app.directive('timer', function(){

        return{
            restrict: 'E',
            templateUrl: 'public/views/timer.html',
            controller: function() {
                this.times = [{
                    description: "This is an example job",
                    code: "1234",
                    time: 1234,
                    adjust: 0
                }];
            },
            controllerAs: "timer"
        };
    });
})();
