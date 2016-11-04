angular.module('reclamos.controllers', [])


.controller('reclamosCtrl', function($scope, $stateParams, $timeout) {

	$scope.reclamos = [];
	$scope.option;
	$scope.selectables = ["Ambulancia", "Accidente", "Animal Suelto", "Mecanico"];
	var refReclamos = new Firebase("https://traficapp.firebaseio.com/reclamos");

    refReclamos.on('child_added', function(data){
    $timeout(function(){
      console.info(data.val(), data.key());
      var reclamo = data.val();
      reclamo.key = data.key();
      $scope.reclamos.push(reclamo);
    });
    });


	$scope.Enviar = function() {
		console.info($scope.option);
		firebase.database().ref("/reclamos/").push({
		Usuario: "Cristian",
		TipoDeAyuda: $scope.option
		})

	 }

	 $scope.LeerOpc = function(elegido){
    
      $scope.Opc = elegido;
       
  	};

});