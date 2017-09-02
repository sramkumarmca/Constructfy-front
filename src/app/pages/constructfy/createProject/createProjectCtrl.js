/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.constructfy.createProject')
      .controller('createProjectCtrl', createProjectCtrl);

  /** @ngInject */
  function createProjectCtrl($scope) {
  
    //  var vm = this;
     // $scope.names = ["Block-x", "Tower-Y"];

      $scope.cars = {
          car01: { brand: "Ford", model: "Mustang", color: "red" },
          car02: { brand: "Fiat", model: "500", color: "white" },
          car03: { brand: "Volvo", model: "XC90", color: "black" }
      };

      // $scope.selectedbuildingType = $scope.buildingType.car01;

      //date
      var a = moment([2007, 0, 29]);
      var b = moment([2007, 0, 28]);
     
      $scope.projectDuration = a.diff(b, 'days');
      //


      //tree
      $scope.remove = function (scope) {
          scope.remove();
      };

      $scope.newFloor = function () {
          var nodeData = $scope.data[$scope.data.length - 1];
          $scope.data.push({
              id: $scope.data.length + 1,
              title: 'floor ' + ($scope.data.length + 1)
          });
      };

      $scope.data = [{
          'id': 1,
          'title': 'floor 1'
      }];
 
      //tree

  }
})();