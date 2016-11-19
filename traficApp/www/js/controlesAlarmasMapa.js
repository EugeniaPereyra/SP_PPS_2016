angular.module('mapa.controllers', [])

.controller('mapaCtrl', function($scope, Alarmas, $timeout) {

    $scope.banderita = true;
	
	$timeout(function(){
		 			$scope.banderita = false;
		 		}, 3000);        
	
	$scope.mapa = {};
    $scope.mapa.latitud = "-34.662189";
    $scope.mapa.longitud = "-58.364643";
    $scope.mapaMarcadores = [];

    var refAlarmas = firebase.database().ref('alarmas/');

    refAlarmas.on('child_added', function(snapshot){
        $timeout(function(){
          var alarma = snapshot.val();
          agregarIconos(alarma);
          $scope.mapaMarcadores.push(
          {
             tipo: alarma.tipo,
             latitud: alarma.latitud,
             longitud: alarma.longitud,
             icono: alarma.icon
          })
        });
    }); 

    function agregarIconos(alarma){
          switch (alarma.tipo) {
            case "Ambulancia":
              alarma.icon = "Ambulancia.png";
              break;
            case "Accidente":
              alarma.icon = "Accidente.png";
              break;
            case "Mecanico":
              alarma.icon = "Mecanico.png";
              break;
            case "Animal-Suelto":
              alarma.icon = "Animal.png";
              break;
            default:
              alarma.icon = "Accidente.png";

          }
        }

});