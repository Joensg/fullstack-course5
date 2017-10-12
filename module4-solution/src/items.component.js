(function () {
    'use strict';

    angular.module('data')
        .component('items', {
            templateUrl: 'src/items.html',
            bindings: {
                items: '<'
            }
        });

})();
