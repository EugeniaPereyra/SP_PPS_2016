angular.module('grafico.controllers', ['ngCordova'])

.controller('graficoCtrl', function($scope, Alarmas, $timeout) {
  // Sample options for first chart
  var alarmas= [];
  $scope.mecanico=0;
  $scope.animal=0;
  $scope.accidente=0;
  $scope.ambulancia=0;

  
  Alarmas.getAlarmas().then(function(respuesta){
    alarmas=respuesta;
    console.log(alarmas.length);

    angular.forEach(alarmas,function(value){
      //console.log(value);
      if(value.tipo=="Animal-Suelto")
      {
        $scope.animal += 1;
      }
      if(value.tipo=="Ambulancia")
      {
        $scope.ambulancia += 1;
      }
      if(value.tipo=="Accidente")
      {
        $scope.accidente += 1;
      }
      if(value.tipo=="Mecanico")
      {
        $scope.mecanico += 1;
      }
    });
    

    //$scope.chartOptions.series[0].data = [$scope.mecanico, $scope.accidente, $scope.animal, $scope.ambulancia];//data.addPoint($scope.mecanico,true);//= [$scope.mecanico, $scope.accidente, $scope.animal, $scope.ambulancia];
    //$scope.chartOptions.series[0].update({});
  });



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