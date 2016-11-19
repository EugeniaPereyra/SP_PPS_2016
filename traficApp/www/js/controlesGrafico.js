angular.module('grafico.controllers', ['ngCordova'])

.controller('graficoCtrl', function($scope, Alarmas, $timeout) {
 $scope.altabandera = true;
	
	$timeout(function(){
		 			$scope.altabandera = false;
		 		}, 3000);     

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
    

    $scope.chartConfig.series[0].data = [$scope.mecanico, $scope.accidente, $scope.animal, $scope.ambulancia];
  });

$scope.chartConfig = {

  options: {
      //This is the Main Highcharts chart config. Any Highchart options are valid here.
      //will be overriden by values specified below.
      chart: {
          type: 'line'
      },
      tooltip: {
          style: {
              padding: 10,
              fontWeight: 'bold'
          }
      }
  },
  //The below properties are watched separately for changes.

  //Series object (optional) - a list of series using normal Highcharts series options.
  series: [{
     name: 'Alarmas',
     data: [0, 0, 0, 0]
  }],
  //Title configuration (optional)
  title: {
     text: 'Cantidad de alarmas'
  },
  //Boolean to control showing loading status on chart (optional)
  //Could be a string if you want to show specific loading text.
  loading: false,
  //Configuration for the xAxis (optional). Currently only one x axis can be dynamically controlled.
  //properties currentMin and currentMax provided 2-way binding to the chart's maximum and minimum
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
  //Whether to use Highstocks instead of Highcharts (optional). Defaults to false.
  useHighStocks: false,
  size: {
    width: 700,
    height: 400
  },
  
  //function (optional)
  func: function (chart) {
   //setup some logic for the chart
  }
};

});