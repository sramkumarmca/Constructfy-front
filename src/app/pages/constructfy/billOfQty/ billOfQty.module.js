/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function() {
  'use strict';

  angular.module('BlurAdmin.pages.constructfy.billOfQty', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('main.constructfy.billOfQty', {
            url: '/billOfQty',
            templateUrl: 'app/pages/constructfy/billOfQty/billOfQty.html',
          controller: 'billOfQtyCtrl',
          title: 'bill Of Qty',
        sidebarMeta: {
          icon: 'ion-ios-pulse',
          order: 100,
        },
        constructfy: true,
        authenticate: true
      });
  }
})();