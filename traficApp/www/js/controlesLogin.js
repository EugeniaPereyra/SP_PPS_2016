angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $ionicModal, $timeout,$state) {

  $scope.banderita = true;
  $scope.loginData = {};
  $scope.loginData.username = "admin@admin.com";
  $scope.loginData.password = "123456";

  $scope.Login = function()
  { 
   $scope.Funciona = false;
  $scope.NoFunciona = false;  

   firebase.auth().signInWithEmailAndPassword($scope.loginData.username, $scope.loginData.password)
   .then(function(Respuesta){
    $timeout(function(){
      $scope.Funciona = true;
	  $scope.banderita = false;
	  $scope.bandera = true;
      console.log("Respuesta: ", Respuesta);  
      $state.go("app.mapa");
        });          
    })
   .catch(function(Error){
      $timeout(function(){
        $scope.NoFunciona = true;
        console.log("Error: ", Error);
       }); 
    });
  }


  $scope.LoginGitHub = function() {
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
