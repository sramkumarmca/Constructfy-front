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

    

      /*
        costfor     section summary   tower/block
      1. primiliries    x                x
      2.site works      yes              x
      3.External        yes              x
      4.other areas     yes              yes
      */
      $scope.viewDetails = function (id) {

          if (id==1)
          {
              $state.go('main.constructfy.breakdown', { divisionId: id });
          }
          else {
              $state.go('main.constructfy.sectionSummary', { divisionId: id });
          }
         
         
      };
  }
})();