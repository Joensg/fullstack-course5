(function () {
    "use strict";

    angular.module('public')
    .controller('SignupController', SignupController);

    SignupController.$inject = ['MenuService', 'MyinfoService'];

    function SignupController(MenuService, MyinfoService) {
      var $ctrl = this;

      $ctrl.favMenuNumberNotFound = false;

      $ctrl.submit = function () {
        $ctrl.favMenuNumberNotFound = true;
        MenuService
          .getMenuItem($ctrl.user.favMenuNumber)
          .then(function (response) {
            if (response && (response.short_name === $ctrl.user.favMenuNumber)) {
              $ctrl.favMenuNumberNotFound = false;
              $ctrl.user.favMenuItem = response;
              MyinfoService.setMyinfo($ctrl.user);
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
