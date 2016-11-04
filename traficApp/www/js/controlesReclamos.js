angular.module('reclamos.controllers', [])


.controller('reclamosCtrl', function($scope, $stateParams, $timeout) {

	$scope.reclamos = [];
	$scope.option;
	$scope.datos={};
	$scope.datos.option;
	$scope.datos.calle;
	$scope.datos.numero;
	$scope.datos.desc;
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

		firebase.database().ref("/reclamos/").push({
		Usuario: "Cristian",
		TipoDeAyuda: $scope.datos.option,
		Calle: $scope.datos.calle + " " + $scope.datos.numero		
		})

	 }

	 $scope.LeerOpc = function(elegido){
    
      $scope.Opc = elegido;
       
  	};

});