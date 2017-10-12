(function () {
    'use strict';

    angular.module('data')
        .component('items', {
            templateUrl: 'src/shoppinglist/templates/shoppinglist.template.html',
            bindings: {
                categories: '<'
            }
        });

})();