angular.module('Home').factory('homeService', ['dataService',
    function (dataService) {
        return {
            getAreasNaturalesProtegidas: function(callback){
                dataService.getData('AreasNaturalesProtegidas', callback);
            }
        };
    }
]);
