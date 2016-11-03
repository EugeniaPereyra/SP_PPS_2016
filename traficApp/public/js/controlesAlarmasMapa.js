angular.module('mapa.controllers', [])

.controller('mapaCtrl', function($scope, Alarmas) {

    $scope.mapa = {};
    $scope.mapa.latitud = "-34.662189";
    $scope.mapa.longitud = "-58.364643";
    $scope.mapaMarcadores = [];

    $scope.mostrarMapa = function(){
        $scope.mapaMarcadores.length = 0;
        Alarmas.getAlarmasMarcadores()
        .then(function(data){
            console.info(data);
            data.map(function(item){
              console.log(item);
              $scope.mapaMarcadores.push(
                {
                  tipo: item.tipo,
                  latitud: item.latitud,
                  longitud: item.longitud,
                  icono: item.icon
                })
            })
          })
      };

      $scope.mostrarMapa();

});