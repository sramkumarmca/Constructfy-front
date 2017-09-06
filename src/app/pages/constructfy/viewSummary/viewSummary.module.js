/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function() {
  'use strict';

    angular.module('BlurAdmin.pages.constructfy.viewSummary', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('main.constructfy.viewSummary', {
          url: '/viewSummary',
          templateUrl: 'app/pages/constructfy/viewSummary/viewSummary.html',
          controller: 'viewSummaryCtrl',
          title: 'view Summary',
        sidebarMeta: {
          icon: 'ion-ios-pulse',
          order: 100,
        },
        constructfy: true,
        authenticate: true
      });
  }
})();