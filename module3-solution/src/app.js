(function(){
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .directive('foundItems', FoundItemsDirective)
        .service('MenuSearchService', MenuSearchService)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

    function FoundItemsDirective () {
        var ddo = {
            templateUrl: 'foundItemsList.html',
            scope: {
                items: '<',
                onRemove: '&'
            },
            controller: function () {
                var ctrl = this;
            },
            controllerAs: 'list',
            bindToController: true
        };

        return ddo;
    }

    NarrowItDownController.$inject = ['MenuSearchService'];

    function NarrowItDownController(MenuSearchService) {

        var ctrl = this;

        ctrl.nothingFound = false;

        ctrl.search = function () {
            MenuSearchService.getMatchedMenuItems(this.searchTerm).then(function (foundItems) {
                if (foundItems.length === 0) {
                    ctrl.nothingFound = true;
                } else {
                    ctrl.nothingFound = false;
                }
                ctrl.found = foundItems;
            });
        };

        ctrl.removeItem = function (itemIndex) {
            ctrl.found.splice(itemIndex, 1);
        };
    }

    MenuSearchService.$inject = ['$http', 'ApiBasePath'];

    function MenuSearchService($http, ApiBasePath) {

        var service = this;

        service.getMatchedMenuItems = function (searchTerm) {
            return $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json")
            }).then(function (result) {
                // process result and only keep items that match
                var foundItems = [];
                var allMenuItems = result.data.menu_items;

                if (searchTerm && searchTerm.trim().length > 0) {
                    allMenuItems.forEach(function (menuItem) {
                        var index = menuItem.description.indexOf(searchTerm.toLowerCase());
                        if(index > -1) {
                            foundItems.push(menuItem);
                        }
                    });
                }
                // return processed items
                return foundItems;
            });
        };
    }

})();