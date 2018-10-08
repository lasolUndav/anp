'use strict';

angular.module('Home')
    .controller('home.anpList', ['$scope','$mdDialog','homeService',
    function ($scope, $mdDialog,homeService) {

      $scope.loadANP=function(){
        homeService.getAreasNaturalesProtegidas(function(ANPs){
          
          $scope.anps = ANPs;
        });
      }
      $scope.loadANP();
    }
  ]);

  angular.module('Home')
      .controller('home.anpList', ['$scope','$mdDialog','homeService',
      function ($scope, $mdDialog,homeService) {

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

      }
    ]);
