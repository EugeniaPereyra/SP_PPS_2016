angular.module('starter.controllers', ['ngCordova'])

.controller('LoginCtrl', function($scope, $ionicModal, $timeout,$state,$cordovaVibration) {

	$scope.unabandera = true;
	
	$timeout(function(){
		 			$scope.unabandera = false;
		 		}, 3000);     
  
  $scope.loginData = {};
  $scope.loginData.username = "admin@admin.com";
  $scope.loginData.password = "123456";

  $scope.Login = function()
  { 
    try{
  	$cordovaVibration.vibrate(300);
     }
     
     catch(Exception){
  	console.log(Exception.Message);
     }
     $scope.Funciona = false;
    $scope.NoFunciona = false;  

     firebase.auth().signInWithEmailAndPassword($scope.loginData.username, $scope.loginData.password)
     .then(function(Respuesta){
        $scope.Funciona = true;
        console.log("Respuesta: ", Respuesta);  
		$timeout(function(){
		 			$state.go("app.mapa");
		 		}, 3000);        
      })
     .catch(function(Error){
          $scope.NoFunciona = true;
          console.log("Error: ", Error);
      });
  }


});
