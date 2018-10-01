'use strict';

angular.module('Home')
    .controller('home.anpList', ['$scope',
        function ($scope) {
            $scope.setup = function () {
              $scope.title = 'hola'
            }

            $scope.setup();
        }
    ]);
