'use strict';

angular.module('ANP', ['Core', 'Layout'])
    .config(function($stateProvider, $urlRouterProvider) {
    })
    .run(['$rootScope', '$state', '$stateParams', '$http',
        function($rootScope, $state, $stateParams, $http) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }
    ]);
