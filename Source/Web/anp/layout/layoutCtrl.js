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
            $scope.setup=function(){
              $scope.anio=2018;
              $scope.nombre="ANPS";
            }
            $scope.setup();
        }

    ]);

    angular.module('Layout')
        .controller('layout.content', ['$scope','$mdDialog','homeService',
        function ($scope, $mdDialog,homeService) {

          $scope.loadANP=function(){
            homeService.getAreasNaturalesProtegidas(function(ANPs){
              $scope.anps = ANPs;
              $scope.$apply()
            });
          }
          $scope.mostrarAreaNaturalProtegida = function(event) {
            $mdDialog.show(
              $mdDialog.alert()
              .title('ANP')
              .textContent('Secondary actions can be used for one click actions')
              .ariaLabel('Secondary click demo')
              .ok('Awesome!')
              .targetEvent(event)
            );
          }

          $scope.loadANP();
        }
      ]);
