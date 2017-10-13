(function () {
  "use strict";

  angular.module('common')
  .service('MyinfoService', MyinfoService);

  function MyinfoService() {
    var service = this;

    service.myinfo = {};

    service.getMyinfo = function () {
      return service.myinfo;
    };

    service.setMyinfo = function (info) {
      service.myinfo = info;
    };

  }

})();
