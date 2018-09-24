'use strict'

angular.module('Layout')
    .directive('header', function() {
        return {
            restrict: 'A',
            templateUrl: 'layout/header.html'
        }
    });

angular.module('Layout')
    .directive('content', function() {
        return {
            restrict: 'A',
            templateUrl: 'layout/content.html'
        }
    });

angular.module('Layout')
    .directive('footer', function() {
        return {
            restrict: 'A',
            templateUrl: 'layout/footer.html'
        }
    });
