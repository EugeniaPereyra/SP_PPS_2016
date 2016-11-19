angular.module('alarma.controllers', [])

.controller('alarmasCtrl', function($scope, Alarmas, $timeout, $cordovaNativeAudio, $ionicPopup, $cordovaVibration, $cordovaGeolocation) {
    
	$scope.labandera = true;
	
	$timeout(function(){
		 			$scope.labandera = false;
		 		}, 3000);        
	
	$scope.option;
	$scope.datos={};
	$scope.datos.option;
 	$scope.alarma={};
	$scope.alarma.latitud="";
	$scope.alarma.longitud="";
	$scope.alarma.tipo="";
	$scope.alarma.descripcion="";
	$scope.selectablesAnimales = ["Vaca", "Perro", "Caballo"];	
	$scope.selectablesAccidente = ["Choque Multiple", "Entre Autos", "Entre Camiones", "Entre Motos"];	
	$scope.selectablesAmbulancia = ["Herido Grave", "Heridos Grave", "Persona herida"];	
	$scope.selectablesMecanico = ["Cambio de Rueda", "Sin Batería", "Falla en Motor"];	


   $scope.Ambulancia = function() {
		   var alertPopup = $ionicPopup.alert({
		     title: 'Ambulancia',
		     template: 'Estamos procesando su solicitud'
		   }); 

    	if (navigator.geolocation) {
		    navigator.geolocation.getCurrentPosition($scope.obtenerPosicion);
		    $scope.alarma.tipo="Ambulancia";		        
		} else {
			try
			{
		      var posOptions = {timeout: 10000, enableHighAccuracy: false};
			  $cordovaGeolocation.getCurrentPosition(posOptions)
			    .then(function (position) {
			      $scope.obtenerPosicion(position);			      
			    }, function(err) {
			      console.log(err);
			    });
			}
			catch(Exception)
			{
				console.log(Exception.Message);
			}
		}
		
		try
		{
			$cordovaVibration.vibrate(300);
			$cordovaNativeAudio.play('SonidoAmbulancia');			
			
		}
	
		catch(Exception)
		{
			console.log(Exception.Message);
		}
		reload();
  	};

	$scope.Accidente = function() {
		   var alertPopup = $ionicPopup.alert({
		     title: 'Accidente',
		     template: 'Estamos procesando su solicitud'
		   })
	    if (navigator.geolocation) {
		    navigator.geolocation.getCurrentPosition($scope.obtenerPosicion);
		    $scope.alarma.tipo="Accidente";		        
		} else {
		    try
			{
		      var posOptions = {timeout: 10000, enableHighAccuracy: false};
			  $cordovaGeolocation.getCurrentPosition(posOptions)
			    .then(function (position) {
			      $scope.obtenerPosicion(position);
			    }, function(err) {
			      console.log(err);
			    });
			}
			catch(Exception)
			{
				console.log(Exception.Message);
			}
		}
		
		try
		{
			$cordovaVibration.vibrate(300);
			$cordovaNativeAudio.play('SonidoAccidente');
		}
		
		catch(Exception)
		{
			console.log(Exception.Message);
		}
		reload();
	 };

	 $scope.Mecanico = function() {
		   var alertPopup = $ionicPopup.alert({
		     title: 'Mecanico',
		     template: 'Estamos procesando su solicitud'
		   })	 	
	    if (navigator.geolocation) {
		    navigator.geolocation.getCurrentPosition($scope.obtenerPosicion);
		    $scope.alarma.tipo="Mecanico";		        
		} else {
		    try
			{
		      var posOptions = {timeout: 10000, enableHighAccuracy: false};
			  $cordovaGeolocation.getCurrentPosition(posOptions)
			    .then(function (position) {
			      $scope.obtenerPosicion(position);
			    }, function(err) {
			      console.log(err);
			    });
			}
			catch(Exception)
			{
				console.log(Exception.Message);
			}
		}
		
		try
		{
			$cordovaVibration.vibrate(300);
			$cordovaNativeAudio.play('SonidoMecanico');
		}
		
		catch(Exception)
		{
			console.log(Exception.Message);
		}
		reload();
	 };

	$scope.AnimalSuelto = function() {
		   var alertPopup = $ionicPopup.alert({
		     title: 'Animal Suelto',
		     template: 'Estamos procesando su solicitud'
		   })		
	    if (navigator.geolocation) {
		    navigator.geolocation.getCurrentPosition($scope.obtenerPosicion);
		    $scope.alarma.tipo="Animal-Suelto";		        
		} else {
		    try
			{
		      var posOptions = {timeout: 10000, enableHighAccuracy: false};
			  $cordovaGeolocation.getCurrentPosition(posOptions)
			    .then(function (position) {
			      $scope.obtenerPosicion(position);
			    }, function(err) {
			      console.log(err);
			    });
			}
			catch(Exception)
			{
				console.log(Exception.Message);
			}
		}
		
		try
		{
			$cordovaVibration.vibrate(300);
			$cordovaNativeAudio.play('SonidoAnimal');
		}
		
		catch(Exception)
		{
			console.log(Exception.Message);
		}
		reload();
	 };

	$scope.obtenerPosicion=function(posicion){
		setTimeout(function() {
			$scope.alarma.latitud=posicion.coords.latitude;
			$scope.alarma.longitud=posicion.coords.longitude;
			$scope.alarma.fecha = Firebase.ServerValue.TIMESTAMP;
			$scope.alarma.descripcion= $scope.datos.option;
			Alarmas.cargarAlarma($scope.alarma);
			console.info($scope.alarma);
		} );
	}
}); 