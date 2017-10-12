(function () {
    'use strict';

    angular.module('data').controller('DataController', DataController);

    DataController.$inject = ['MenuDataService'];

    function DataController (MenuDataService) {
        var ctrl = this;

        ctrl.nothingFound = false;

        MenuDataService.getAllCategories()
            .then(function (categories) {
                if (categories.length === 0) {
                    ctrl.nothingFound = true;
                } else {
                    ctrl.nothingFound = false;
                }
                ctrl.categories = categories;
            });
    }
})();