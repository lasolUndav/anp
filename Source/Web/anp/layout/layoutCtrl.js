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
            $scope.setup=function(){
            $scope.title='Áreas Naturales Protegidas';
          }
            $scope.setup();
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
        .controller('layout.content', ['$scope','$mdDialog','homeService', '$filter',
        function ($scope, $mdDialog,homeService,$filter) {

          $scope.loadANP=function(){
            homeService.getAreasNaturalesProtegidas(function(ANPs){
              $scope.anps = ANPs;
              $scope.search()
              $scope.$apply()
            });
          }
          $scope.mostrarAreaNaturalProtegida = function(event, area) {
            var inyectarea =function ($scope, area){
              $scope.area = area
            }
            $mdDialog.show({
              templateUrl : './layout/anpPopUp.html',
              parent: angular.element(document.body),
              targetEvent: event,
              clickOutsideToClose:true,
              locals: {area: area},
              controller: inyectarea
            }
            );
          }

          $scope.loadANP();
          $scope.search= function(){
                $scope.anpsFiltrados = $filter('filter')($scope.anps, $scope.searchText);
        };
        }
      ]);
