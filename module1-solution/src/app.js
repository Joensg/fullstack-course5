(function(){
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {

  $scope.lunchMenu = '';
  $scope.displayMessage = '';

  $scope.submitForm = function() {
    var userInputStringArray = $scope.lunchMenu.split(',');
    for(var arrayIndex = 0; arrayIndex < userInputStringArray.length; arrayIndex++){
      var trimmedValue = userInputStringArray[arrayIndex].trim();
      if (trimmedValue == '') {
        userInputStringArray.splice(arrayIndex, 1);
        arrayIndex--;
      }
    }

    if(userInputStringArray.length == 0) {
      $scope.displayMessage = 'Please enter data first';
      document.querySelector("#lunch-menu").style.border = "1px solid red";
      document.querySelector(".message").style.color = "red";
    }
    else if(userInputStringArray.length <= 3) {
      $scope.displayMessage = 'Enjoy!';
      document.querySelector("#lunch-menu").style.border = "1px solid green";
      document.querySelector(".message").style.color = "green";
    }
    else if(userInputStringArray.length > 3){
      $scope.displayMessage = 'Too much!';
      document.querySelector("#lunch-menu").style.border = "1px solid green";
      document.querySelector(".message").style.color = "green";
    }
  }
}

})();