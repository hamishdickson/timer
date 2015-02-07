angular.module("MyApp").run(["$templateCache", function($templateCache) {$templateCache.put("views/countdown.html","<div>\n  <p>Time: {{time}}</p>\n  <button type=\"button\" class=\"btn btn-default\"\n  ng-click=\"restartCountdown(2000)\">{{buttonText}}</button>\n</div>\n");
$templateCache.put("views/timer.html","<div class=\"container\">\n  <table>\n    <tr>\n      <th>Description</th>\n      <th>Code</th>\n      <th>Time</th>\n      <th>Start/stop</th>\n      <th>Adjust</th>\n    </tr>\n    <tr ng-repeat=\"time in timer.times track by $index\">\n      <td>{{time.description}}</td>\n      <td>{{time.code}}</td>\n      <td>{{time.time}}</td>\n      <td ng-show=\"time.isSet(time.code)\"><button type=\"button\" class=\"btn btn-default\">stop</button></td>\n      <td ng-show=\"!time.isSet(time.code)\" ng-click=\"time.setActive(time.code)\"><button type=\"button\" class=\"btn btn-default\">start</button></td>\n      <td>{{time.adjust}}</td>\n    </tr>\n  </table>\n</div>\n\n\n\n\n\n");}]);