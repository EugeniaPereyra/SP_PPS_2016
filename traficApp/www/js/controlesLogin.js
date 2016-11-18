angular.module('starter.controllers', ['ngCordova'])

.controller('LoginCtrl', function($scope, $ionicModal, $timeout,$state,$cordovaVibration) {

  $scope.loginData = {};
  $scope.loginData.username = "admin@admin.com";
  $scope.loginData.password = "123456";

  $scope.Login = function()
  { 
    try{
  	$cordovaVibration.vibrate(200);
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
        $state.go("app.mapa");         
      })
     .catch(function(Error){
          $scope.NoFunciona = true;
          console.log("Error: ", Error);
      });
  }


  $scope.LoginGitHub = function() {
  try{
	$cordovaVibration.vibrate(200);
   }
   
   catch(Exception){
	console.log(Exception.Message);
   }
    $scope.Funciona = false;
  $scope.NoFunciona = false;  
  
   var provider = new firebase.auth.GithubAuthProvider();

   firebase.auth().signInWithRedirect(provider);

    firebase.auth().getRedirectResult().then(function(result) {
      if (result.credential) {      
        var token = result.credential.accessToken;  
      }
     
      var user = result.user;

      $timeout(function(){
      $scope.Funciona = true;
      console.log("Respuesta: ", result);  
      $state.go("app.mapa");
      }); 

    }).catch(function(error) {
     
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
       $timeout(function(){
        $scope.NoFunciona = true;
        console.log("Error: ", error);
       }); 
    });


  };



});
