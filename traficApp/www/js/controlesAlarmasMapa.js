angular.module('mapa.controllers', [])

.controller('mapaCtrl', function($scope, Alarmas, $timeout) {

    $scope.mapa = {};
    $scope.mapa.latitud = "-34.662189";
    $scope.mapa.longitud = "-58.364643";
    $scope.mapaMarcadores = [];
    var ahora = new Date().getTime();

    var refAlarmas = firebase.database().ref('alarmas/');

    refAlarmas.on('child_added', function(snapshot){
        $timeout(function(){
          var alarma = snapshot.val();
          var duracion = ahora - alarma.fecha;
          //console.info(fecha);
          if(duracion<259200000) // tres dias en milisegundos --> http://www.convertidorunidades.com/dias-a-milisegundos
          {
            agregarIconos(alarma);
            $scope.mapaMarcadores.push(
            {
                tipo: alarma.tipo,
                latitud: alarma.latitud,
                longitud: alarma.longitud,
                icono: alarma.icon
            })
          }
          else
          {
            console.log("la alarma lleva tres dias o mas");
          }

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