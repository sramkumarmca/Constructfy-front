/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

    angular.module('BlurAdmin.pages.constructfy.breakdown')
        .controller('breakdownCtrl', breakdownCtrl);

  /** @ngInject */
    function breakdownCtrl($scope, $stateParams) {
  
      //  var vm = this;
      // $scope.names = ["Block-x", "Tower-Y"];

        $scope.divisionId = $stateParams.divisionId;


  }
})();