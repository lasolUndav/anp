angular.module('Home', ['Core']).config(function($stateProvider) {
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "home/index.html"
            })
    });
