(function () {
    var app = angular.module('countdown-directive', []);

    app.directive('countdown', function () {
    this.initial = 1500000; // 25 min

        return {
            restrict: 'E',
            templateUrl: 'public/views/countdown.html',
            controller: [ '$timeout', '$scope', function ($timeout, $scope) {
            
                $scope.time = msToTime(this.initial);
                var classForCountdown = "";

                $scope.restartCountdown = function() {
                    startCountdown(this.intitial);
                };

                function startCountdown(inTime) {
                    if (inTime >= 1000) {
                        $scope.time = msToTime(inTime);
                        $timeout(function () {
                            startCountdown(inTime - 1000);
                        }, 1000);
                    }
                    return;
                };

                function msToTime(duration) {
                    var seconds = parseInt((duration/1000)%60)
                    , minutes = parseInt((duration/(1000*60))%60)
                    , hours = parseInt((duration/(1000*60*60))%24);

                    hours = (hours < 10) ? "0" + hours : hours;
                    minutes = (minutes < 10) ? "0" + minutes : minutes;
                    seconds = (seconds < 10) ? "0" + seconds : seconds;

                    return hours + ":" + minutes + ":" + seconds;
                }
                
                function countdownClass() {
                    return classForCountdown;
                }
            }],
            controllerAs: "countdown"
        };
    });
})();
