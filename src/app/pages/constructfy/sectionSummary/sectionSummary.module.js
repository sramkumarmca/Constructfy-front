/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function() {
  'use strict';

  angular.module('BlurAdmin.pages.constructfy.sectionSummary', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('main.constructfy.sectionSummary', {
            url: '/sectionSummary',
          templateUrl: 'app/pages/constructfy/sectionSummary/sectionSummary.html',
          controller: 'sectionSummaryCtrl',
          title: 'Section Summary',
        sidebarMeta: {
          icon: 'ion-ios-pulse',
          order: 100,
        },
        constructfy: true,
        authenticate: true
      });
  }
})();