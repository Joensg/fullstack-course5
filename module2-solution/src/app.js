(function(){
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService) {

  this.toBuy = ShoppingListCheckOffService.toBuy;

  this.bought = ShoppingListCheckOffService.bought;

  this.buyItem = function(item) {
    var index = this.toBuy.indexOf(item);
    if(index > -1) {
      this.toBuy.splice(index, 1);
      this.bought.push(item);
    }
  }

}

function AlreadyBoughtController(ShoppingListCheckOffService) {

  this.bought = ShoppingListCheckOffService.bought;

}

function ShoppingListCheckOffService() {

  var toBuy = [ { name: "mangoes", quantity: 2 },
                { name: "apples", quantity: 4 },
                { name: "oranges", quantity: 3 },
                { name: "cookies", quantity: 6 },
                { name: "chocolates", quantity: 10 },
                { name: "Plums", quantity: 5 } ]
  var bought = [];

  return {
    toBuy: toBuy,
    bought: bought
  }

}

})();