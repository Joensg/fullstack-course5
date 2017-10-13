(function () {
    "use strict";

    angular.module('public')
    .controller('SignupController', SignupController);

    SignupController.$inject = ['MenuService', 'MyinfoService'];

    function SignupController(MenuService, MyinfoService) {
      var $ctrl = this;

      $ctrl.user = {};

      $ctrl.submitSuccess = false;
      $ctrl.favMenuNumberNotFound = false;

      $ctrl.submit = function () {
        if ($ctrl.user.favMenuItem) {
          MyinfoService.setMyinfo($ctrl.user);
          $ctrl.submitSuccess = true;
        }
      };

      $ctrl.checkMenuNumber = function () {
        $ctrl.favMenuNumberNotFound = true;
        MenuService
          .getMenuItem($ctrl.user.favMenuNumber)
          .then(function (response) {
            if (response && (response.short_name === $ctrl.user.favMenuNumber)) {
              $ctrl.favMenuNumberNotFound = false;
              $ctrl.user.favMenuItem = response;
            } else {
              $ctrl.favMenuNumberNotFound = true;
            }
          })
          .catch(function (error) {
            $ctrl.favMenuNumberNotFound = true;
          });
      };
    }

})();
