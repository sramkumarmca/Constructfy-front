/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function() {
  'use strict';

  angular.module('BlurAdmin.pages.constructfy.breakdown', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('main.constructfy.breakdown', {
            url: '/breakdown',
            templateUrl: 'app/pages/constructfy/breakdown/breakdown.html',
            controller: 'breakdownCtrl',
            title: 'Breakdown',
        sidebarMeta: {
          icon: 'ion-ios-pulse',
          order: 100,
        },
        constructfy: true,
        authenticate: true
      });
  }
})();