/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function() {
  'use strict';

    angular.module('BlurAdmin.pages.constructfy.viewTest', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('main.constructfy.viewTest', {
          url: '/viewTest',
          templateUrl: 'app/pages/constructfy/viewTest/viewTest.html',
          controller: 'viewTestCtrl',
          title: 'view Test',
        sidebarMeta: {
          icon: 'ion-ios-pulse',
          order: 100,
        },
        constructfy: true,
        authenticate: true
      });
  }
})();