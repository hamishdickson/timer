(function () {
    var app = angular.module('countdown-directive', []);

    app.directive('countdown', function () {

        return {
            restrict: 'E',
            templateUrl: 'public/views/countdown.html',
            controller: [ '$timeout', '$scope', function ($timeout, $scope) {
                var initial = 1500000; // 25 min
                var classForCountdown = "";

                $scope.buttonText = "Start";
                $scope.time = msToTime(initial);
                $scope.cdBtnClass = "btn-default";

                $scope.restartCountdown = function() {
                    $scope.cdBtnClass = "btn-success";
                    $scope.buttonText = "Restart";
                    var startTime = initial;
                    $scope.time = msToTime(startTime);
                    startCountdown(startTime);
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
