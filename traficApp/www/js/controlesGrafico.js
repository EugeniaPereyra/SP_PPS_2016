angular.module('grafico.controllers', ['ngCordova'])

.controller('graficoCtrl', function($scope, Alarmas,$timeout) {
  // Sample options for first chart
  var alarmas= [];
  $scope.mecanico=0;
  $scope.animal=0;
  $scope.accidente=0;
  $scope.ambulancia=0;

  

  $scope.DatosFire = new Firebase("https://traficapp.firebaseio.com/alarmas");

 $scope.DatosFire.on('child_added', function (snapshot) {
   
    var message = snapshot.val();
    alarmas.push(message.tipo);

    console.log("Adentro",alarmas);
 
  $scope.mecanico=4;
 
   

  });
console.log("Afuera",alarmas);
console.log("Mecanico",$scope.mecanico)



    $scope.chartOptions = {
        title: {
            text: 'Cantidad de alarmas'
          },
        xAxis: {
          title: {
            text: 'Accidentes'
          },
          categories: ['Mecanico', 'Accidente', 'Animal suelto', 'Ambulancia']
        },
        yAxis: {
          // Pongo el título para el eje de las 'Y'
          title: {
            text: 'Nº Alarmas'
          }
        },
        series: [{
           data: [$scope.mecanico, $scope.accidente, $scope.animal, $scope.ambulancia]
         }]
      };
});