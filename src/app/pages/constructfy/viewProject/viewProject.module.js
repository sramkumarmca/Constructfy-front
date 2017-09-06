/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function() {
  'use strict';

  angular.module('BlurAdmin.pages.constructfy.viewProject', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('main.constructfy.viewProject', {
          url: '/viewProject',
          templateUrl: 'app/pages/constructfy/viewProject/viewProject.html',
          controller: 'viewProjectCtrl',
          title: 'View Project',
        sidebarMeta: {
          icon: 'ion-ios-pulse',
          order: 100,
        },
        constructfy: true,
        authenticate: true
      });
  }
})();