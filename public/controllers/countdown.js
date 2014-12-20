(function () {
    var app = angular.module('countdown-directive', []);

    app.directive('countdown', function(){

        return{
            restrict: 'E',
            templateUrl: 'public/views/countdown.html',
            controller: [ '$timeout', '$scope', function($timeout, $scope) {
                //this.initial = 1500000; // 25 min
                this.initial = 2000; // 25 min
                this.time = this.initial;

                this.restartCountdown = function() {
                    this.time = this.initial;
                    this.startCountdown(30000);
                };

                this.startCountdown = function(inTime) {
              
                    if (inTime >= 1000) {
                        this.time = inTime;
                        $timeout(function() {
                                this.startCountdown(inTime - 1000)
                        }, 1000);
                    }
                    return;
                };

            }],
            controllerAs: "countdown"
        };
    });
})();
