(function () {
    "use strict";

    angular.module('public')
    .controller('MyinfoController', MyinfoController);

    MyinfoController.$inject = ['MyinfoService', 'ApiPath'];

    function MyinfoController(MyinfoService, ApiPath) {
      var $ctrl = this;

      $ctrl.basePath = ApiPath;

      $ctrl.myinfo = MyinfoService.getMyinfo();
    }

})();
