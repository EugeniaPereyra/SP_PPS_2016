angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {


  $scope.loginData = {};
  $scope.loginData.username="";
  $scope.loginData.password="";
 // $scope.loginData.username = "sebaspagano";
 // $scope.loginData.password = "123123";
  

  $scope.LoginGitHub = function() {

   $scope.Funciona = false;
   var provider = new firebase.auth.GithubAuthProvider();
   firebase.auth().signInWithPopup(provider).then(function(result) {
     var user = result.user;
     $scope.Funciona = true;
     console.log($scope.Funciona);
    }).catch(function(error) {

      console.info("Error: ",error);
    });


  };


});
