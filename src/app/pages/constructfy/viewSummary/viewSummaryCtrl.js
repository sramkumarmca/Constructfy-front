/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

    angular.module('BlurAdmin.pages.constructfy.viewSummary')
      .controller('viewSummaryCtrl', viewSummaryCtrl);

  /** @ngInject */
    function viewSummaryCtrl($scope, $state) {
  
      //  var vm = this;
      // $scope.names = ["Block-x", "Tower-Y"];

    

      $scope.viewDetail = function () {
          $state.go('main.constructfy.detail');
      };
  }
})();