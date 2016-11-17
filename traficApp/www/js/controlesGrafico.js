angular.module('grafico.controllers', [])

.controller('graficoCtrl', function($scope, Alarmas) {
  // Sample options for first chart
  var alarmas=[];
  alarmas=Alarmas.getAlarmas();
  $scope.mecanico=0;
  $scope.animal=0;
  $scope.accidente=0;
  $scope.ambulancia=0;



    $scope.chartOptions = {
        title: {
            text: 'Cantidad de alarmas cada 3 días'
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