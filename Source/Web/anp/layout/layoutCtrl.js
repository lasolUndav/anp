'use strict';

angular.module('Layout')
    .controller('layoutCtrl', ['$scope',
        function ($scope) {
        }
    ]);

angular.module('Layout')
    .controller('layout.header', ['$scope', '$controller',
        function ($scope, $controller) {
            $controller('layoutCtrl', { $scope: $scope });
        }
    ]);

angular.module('Layout')
    .controller('layout.footer', ['$scope', '$controller',
        function ($scope, $controller) {
            $controller('layoutCtrl', { $scope: $scope });
            $scope.setup = function(){
                $scope.anio = 2018;
                $scope.nombre = "ANP";
            }
            $scope.setup();
        }
    ]);
