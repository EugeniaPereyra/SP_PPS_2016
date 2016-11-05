angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout,$state) {

  $scope.Funciona = false;
  $scope.NoFunciona = false;  
  $scope.loginData = {};
  $scope.loginData.username = "admin@admin.com";
  $scope.loginData.password = "123456";
  $scope.Login = function()
  {
   firebase.auth().signInWithEmailAndPassword($scope.loginData.username, $scope.loginData.password)
   .then(function(Respuesta){
    $timeout(function(){
      $scope.Funciona = true;
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
  
   var provider = new firebase.auth.GithubAuthProvider();
   firebase.auth().signInWithPopup(provider).then(function(result) {
     var user = result.user;
     $scope.Funciona = true;
     console.log($scope.Funciona);
    }).catch(function(error) {    
      console.info("Error: ",error);
    });



  };

  $scope.LogOut = function(){

    firebase.auth().signOut().catch(function(Error){
      console.log("Error: ", Error);
    }).then(function(Respuesta){
      console.log("Respuesta: ", Respuesta);
    });

  }


});
