/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function() {
  'use strict';

  angular.module('BlurAdmin.pages.constructfy.createProject', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('main.constructfy.createProject', {
          url: '/createProject',
          templateUrl: 'app/pages/constructfy/createProject/createProject.html',
          controller: 'createProjectCtrl',
          title: 'Create Project',
        sidebarMeta: {
          icon: 'ion-ios-pulse',
          order: 100,
        },
       // constructfy: true,
        authenticate: true
      });
  }
})();