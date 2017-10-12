(function () {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Redirect to tab 1 if no other URL matches
        $urlRouterProvider.otherwise('/');

        // Set up UI states
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'src/home.html'
            })

            .state('categories', {
                url: '/categories',
                templateUrl: 'src/categories_view.html',
                controller: 'CategoriesController as CategoriesCtrl',
                resolve: {
                    categories: ['MenuDataService', function(MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })

            .state('items', {
                url: '/categories/{categoryShortName}',
                templateUrl: 'src/items_view.html',
                controller: 'ItemsController as ItemsCtrl',
                resolve: {
                    items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
                        return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
                    }]
                }
            });
    }
})();
