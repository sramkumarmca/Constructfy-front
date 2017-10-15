/**
 * @author k.danovsky
 * created on 15.01.2016
 */
(function() {
  'use strict';

  angular.module('BlurAdmin.pages.constructfy', [
      'BlurAdmin.pages.constructfy.createProject',
      'BlurAdmin.pages.constructfy.viewProject',
      'BlurAdmin.pages.constructfy.billOfQty',
      'BlurAdmin.pages.constructfy.breakdown'
      //'BlurAdmin.pages.components.timeline',
      //'BlurAdmin.pages.components.tree',
    ])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('main.constructfy', {
        url: '/constructfy',
        template: '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
        abstract: true,
        title: 'Costing',
        sidebarMeta: {
          icon: 'ion-gear-a',
          order: 100,
        },
        constructfy:true,
        authenticate: true
      });
  }

})();