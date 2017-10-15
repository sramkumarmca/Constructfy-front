/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.constructfy.viewProject')
      .controller('viewProjectCtrl', viewProjectCtrl);

  /** @ngInject */
  function viewProjectCtrl($scope,$state) {
  
    
      $scope.viewProject = function () {
          $state.go('main.constructfy.createProject');
      };

      $scope.viewBOQ = function () {
          $state.go('main.constructfy.billOfQty');
      };

  }
})();