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

      $scope.newFloor = function (towerId) {
          _.forEach($scope.data, function (value,index ) {
              if (value.id === towerId)
              {
                  var nodeData = _.find($scope.data, function (item) { return item.id === towerId })
                  if (nodeData.floor == undefined) {
                      nodeData.floor = [];
                  }
                  nodeData.floor.push({
                      floorId: value.floor.length + 1,
                      floorName: 'floor ' + (value.floor.length + 1)
                  });
              }
          });
      };

      $scope.newTower = function () {
          var nodeData = $scope.data.length;
            $scope.data.push({
                id: nodeData + 1,
                name: 'Tower ' + (nodeData + 1)
            });
       
      };
      
      $scope.deleteTower = function (towerId) {
          $scope.data.splice(towerId-1);
      };

      $scope.data = [{ 'id': 1, 'name': 'Tower1', 'floor': [{ 'floorId': 1, 'floorName': 'floor1' }, { 'floorId': 2, 'floorName': 'floor2' }] }
                    ,{ 'id': 2,'name':'Tower2', 'floor': [{ 'floorId': 1, 'floorName': 'floor2.1' }, { 'floorId': 2, 'floorName': 'floor2.2' }] }
        ];
 
      //tree

  }
})();