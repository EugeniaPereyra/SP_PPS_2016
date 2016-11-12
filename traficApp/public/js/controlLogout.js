angular.module('logout.controllers', [])

.controller('LogoutCtrl', function($state,$scope) {

  $scope.LogOut = function(){

    firebase.auth().signOut().catch(function(Error){
      console.log("Error: ", Error);
    }).then(function(Respuesta){
      console.log("Respuesta: ", Respuesta);
      $state.go("login");
    });

  }

  $scope.Seguir = function(){

    $state.go("app.mapa");
    
  }


});
