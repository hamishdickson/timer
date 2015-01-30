(function () {
    var app = angular.module('countdown-directive', []);

    app.directive('countdown', function () {

        return {
            restrict: 'E',
            templateUrl: 'public/views/countdown.html',
            controller: [ '$timeout', '$scope', function ($timeout, $scope) {
                //this.initial = 1500000; // 25 min
                this.initial = 2000;
                $scope.time = this.initial;

                $scope.restartCountdown = function() {
                    $scope.time = this.initial;
                    startCountdown(3000);
                };

                function startCountdown(inTime) {
                    if (inTime >= 1000) {
                        $scope.time = inTime;
                        $timeout(function () {
                            startCountdown(inTime - 1000);
                        }, 1000);
                    }
                    var notification = new Notification("Timer ended");
                    return;
                };
            }],
            controllerAs: "countdown"
        };
    });
})();
