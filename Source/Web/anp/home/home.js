'use strict';

angular.module('Home', ['Core']).config(function($stateProvider) {
        $stateProvider
            .state('home', {
                url: "/home",
                abstract: true,
                template: "<ui-view />"
            })
            .state('home.list', {
                url: "/",
                templateUrl: "home/index.html"
            })
    });
