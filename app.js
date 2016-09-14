(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject=['$scope'];
function LunchCheckController ($scope) {
  $scope.editingDishes = "";
  $scope.userMessage = "";

  $scope.checkDishes = function () {
      var dishes = $scope.editingDishes;
      dishes = normalizeString(dishes);
      if (dishes === "")
      {
        $scope.userMessage = "Please enter non-empty data first";
        return;
      }

      var cnt = dishes.split(",").length
      console.log(cnt);
      if (cnt < 4)
      {
        $scope.userMessage = "Enjoy!";
      }
      else {
        $scope.userMessage = "Too much!";
      }
  }

  function normalizeString(str) {
    if (str === "")
      return "";
    var localStr = str.replace(/ /g,'');
    var pos;
    //remove trailing commas
    while(localStr.length > 0 && (localStr[0] === "," || localStr[localStr.length-1] === ","))
    {
      if (localStr[0] === ",")
      {
        localStr = localStr.substring(1);
        continue;
      }
      if (localStr[localStr.length-1] === ",")
      {
        localStr = localStr.substring(0, localStr.length-1);
        continue;
      }
    }
    console.log(localStr);
    return localStr;
  }
}
})();
