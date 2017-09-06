/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.constructfy.createProject')
      .controller('createProjectCtrl', createProjectCtrl);

  /** @ngInject */
  function createProjectCtrl($scope,$state) {
  
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


      //external works
      $scope.users = [
    {
        "id": 1,
        "name": "Esther Vang",
        "status": 4,
        "group": 3
    },
    {
        "id": 2,
        "name": "Leah Freeman",
        "status": 3,
        "group": 1
    },
    {
        "id": 3,
        "name": "Mathews Simpson",
        "status": 3,
        "group": 2
    },
      ];

      $scope.removeUser = function (index) {
          $scope.users.splice(index, 1);
      };

      $scope.addUser = function () {
          $scope.inserted = {
              id: $scope.users.length + 1,
              name: '',
              status: null,
              group: null
          };
          $scope.users.push($scope.inserted);
      };

      $scope.externalSelect = [{ "id": 1, "name": "Sewer manholes" }, { "id": 2, "name": "manholes" }, { "id": 3, "name": "Custom" }];
      $scope.choice = null;

      $scope.customText = false;
      $scope.selectedTemplate = function (id) {
          alert(id);
          if(id===3)
          {
              $scope.customText = true;
          }
      };

      //external works ens


      //save button
      $scope.viewProject = function () {
          $state.go('main.constructfy.viewProject');
      };
      //
  }
})();