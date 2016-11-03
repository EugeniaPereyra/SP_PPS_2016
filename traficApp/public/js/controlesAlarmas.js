angular.module('alarma.controllers', [])

.controller('alarmasCtrl', function($scope, Alarmas) {

 	$scope.alarma={};
	$scope.alarma.latitud="";
	$scope.alarma.longitud="";
	$scope.alarma.tipo="";

   $scope.Ambulancia = function() {
    	if (navigator.geolocation) {
		    navigator.geolocation.getCurrentPosition($scope.obtenerPosicion);
		    $scope.alarma.tipo="Ambulancia";		        
		} else {
		    console.log("Geolocation is not supported by this browser.");
		}
  	};

	$scope.Accidente = function() {
	    if (navigator.geolocation) {
		    navigator.geolocation.getCurrentPosition($scope.obtenerPosicion);
		    $scope.alarma.tipo="Accidente";		        
		} else {
		    console.log("Geolocation is not supported by this browser.");
		}
	 };

	$scope.AnimalSuelto = function() {
	    if (navigator.geolocation) {
		    navigator.geolocation.getCurrentPosition($scope.obtenerPosicion);
		    $scope.alarma.tipo="Animal-Suelto";		        
		} else {
		    console.log("Geolocation is not supported by this browser.");
		}
	 };

	$scope.obtenerPosicion=function(posicion){
		setTimeout(function() {
			$scope.alarma.latitud=posicion.coords.latitude;
			$scope.alarma.longitud=posicion.coords.longitude;
			Alarmas.cargarAlarma($scope.alarma);
			console.info($scope.alarma);
		} );
	}
});