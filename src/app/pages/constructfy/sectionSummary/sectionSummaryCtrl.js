/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.constructfy.sectionSummary')
      .controller('sectionSummaryCtrl', sectionSummaryCtrl);

  /** @ngInject */
  function sectionSummaryCtrl($scope, $state) {
  
      //  var vm = this;
      // $scope.names = ["Block-x", "Tower-Y"];

      $scope.viewBreakdown = function (id) {

          $state.go('main.constructfy.breakdown', { divisionId: id });
      }
      
  }
})();