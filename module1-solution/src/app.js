(function(){
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {

  $scope.lunchMenu = '';
  $scope.displayMessage = '';
  $scope.lunchMenuInputClass = '';
  $scope.displayMessageClass = '';

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
      $scope.lunchMenuInputClass = 'lunch-menu-input-red';
      $scope.displayMessageClass = 'message-red';
    }
    else if(userInputStringArray.length <= 3) {
      $scope.displayMessage = 'Enjoy!';
      $scope.lunchMenuInputClass = 'lunch-menu-input-green';
      $scope.displayMessageClass = 'message-green';
    }
    else if(userInputStringArray.length > 3){
      $scope.displayMessage = 'Too much!';
      $scope.lunchMenuInputClass = 'lunch-menu-input-green';
      $scope.displayMessageClass = 'message-green';
    }
  }
}

})();