/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.constructfy.billOfQty')
      .controller('billOfQtyCtrl', billOfQtyCtrl);

  /** @ngInject */
  function billOfQtyCtrl($scope, $state) {
  
      //  var vm = this;
      // $scope.names = ["Block-x", "Tower-Y"];

    

      $scope.viewBreakdown = function (id) {
          
          $state.go('main.constructfy.breakdown', { divisionId: id });
         // $state.go('main.constructfy.breakdown');
      };
  }
})();