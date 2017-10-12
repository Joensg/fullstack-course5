(function () {
    'use strict';

    angular.module('data')
        .component('categories', {
            templateUrl: 'src/shoppinglist/templates/shoppinglist.template.html',
            bindings: {
                categories: '<'
            }
        });

})();