'use strict';

angular.module('Home')
    .controller('home.anpList', ['$scope','$mdDialog',
    function ($scope, $mdDialog) {
      $scope.mostrarAreaNaturalProtegida = function(event) {
        $mdDialog.show(
          $mdDialog.alert()
          .title('ANP')
          .textContent('Primary actions can be used for one click actions')
          .ariaLabel('Primary click demo')
          .ok('Awesome!')
          .targetEvent(event)
        );
      };
    }
  ]);
