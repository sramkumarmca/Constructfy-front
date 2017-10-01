/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function() {
  'use strict';

    angular.module('BlurAdmin.pages.constructfy.detail', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('main.constructfy.detail', {
          url: '/detail',
          templateUrl: 'app/pages/constructfy/detail/detail.html',
          controller: 'detailCtrl',
          title: 'Detail',
        sidebarMeta: {
          icon: 'ion-ios-pulse',
          order: 100,
        },
        constructfy: true,
        authenticate: true
      });
  }
})();