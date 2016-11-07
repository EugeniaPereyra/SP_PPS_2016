angular.module('alarma.controllers', [])

.controller('alarmasCtrl', function($scope, Alarmas, $cordovaNativeAudio,$ionicPopup, $cordovaVibration, $cordovaGeolocation) {

 	$scope.alarma={};
	$scope.alarma.latitud="";
	$scope.alarma.longitud="";
	$scope.alarma.tipo="";

   $scope.Ambulancia = function() {
		   var alertPopup = $ionicPopup.alert({
		     title: 'Ambulancia',
		     template: 'Estamos procesando su solicitud'
		   })
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
			$cordovaVibration.vibrate(2500);
			$cordovaNativeAudio.play('Ambulancia');
		}
		
		catch(Exception)
		{
			console.log(Exception.Message);
		}
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
			$cordovaVibration.vibrate(2200);
			$cordovaNativeAudio.play('Accidente');
		}
		
		catch(Exception)
		{
			console.log(Exception.Message);
		}
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
			$cordovaVibration.vibrate(2500);
			$cordovaNativeAudio.play('Mecanico');
		}
		
		catch(Exception)
		{
			console.log(Exception.Message);
		}
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
			$cordovaVibration.vibrate(2000);
			$cordovaNativeAudio.play('Animal');
		}
		
		catch(Exception)
		{
			console.log(Exception.Message);
		}
	 };

	$scope.obtenerPosicion=function(posicion){
		setTimeout(function() {
			$scope.alarma.latitud=posicion.coords.latitude;
			$scope.alarma.longitud=posicion.coords.longitude;
			$scope.alarma.fecha = Firebase.ServerValue.TIMESTAMP;
			Alarmas.cargarAlarma($scope.alarma);
			console.info($scope.alarma);
		} );
	}
}); 