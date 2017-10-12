(function () {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Redirect to tab 1 if no other URL matches
        $urlRouterProvider.otherwise('/home');

        // Set up UI states
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'src/home.html'
            })

            .state('categories', {
                url: '/categories',
                templateUrl: 'src/categories.html'
            })

            .state('items', {
                url: '/items',
                templateUrl: 'src/items.html'
            });
    }
})();