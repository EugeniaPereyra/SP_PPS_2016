angular.module('reclamos.controllers', ['ngCordova'])


.controller('reclamosCtrl', function($scope, $stateParams, $timeout, $cordovaVibration, $ionicPopup, $state) {

	$scope.mibandera = true;
	
	$timeout(function(){
		 			$scope.mibandera = false;
		 		}, 3000);     
	
	$scope.reclamos = [];
	$scope.option;
	$scope.datos={};
	$scope.datos.option;
	$scope.datos.desc;
	$scope.datos.valora;
	$scope.selectables = ["Errores", "Sugerencias", "Comentarios"];
	var refReclamos = new Firebase("https://traficapp.firebaseio.com/reclamos");

    refReclamos.on('child_added', function(data){
    $timeout(function(){
      console.info(data.val(), data.key());
      var reclamo = data.val();
      reclamo.key = data.key();
      $scope.reclamos.push(reclamo);
    });
    });

     $scope.ratingsObject = {
        iconOn : 'ion-ios-star',
        iconOff : 'ion-ios-star-outline',
        iconOnColor: 'rgb(31, 16, 239	)',
        iconOffColor:  'rgb(239, 16, 68)',
        rating:  2,
        minRating:1,
        callback: function(rating) {
          $scope.ratingsCallback(rating);
        }
      };

      $scope.ratingsCallback = function(rating) {
      	$scope.datos.valora = rating;
        console.log('Selected rating is : ', rating);
      }

	$scope.Enviar = function() {
	
	try{
	$cordovaVibration.vibrate(200);
   }
   
   catch(Exception){
	console.log(Exception.Message);
   }

		firebase.database().ref("/reclamos/").push({
		Usuario: firebase.auth().currentUser.email,
		Valoracion: $scope.datos.valora,
		TipoDeAyuda: $scope.datos.option,
		Reclamo: $scope.datos.desc
		})
    var alertPopup = $ionicPopup.alert({
         title: 'Enviado',
         template: 'Reclamo enviado correctamente'
       });

    $state.go('app.alarmas');
	 }

	 $scope.LeerOpc = function(elegido){
    
      $scope.Opc = elegido;
       
  	};

})

.controller('reclamosMostrarCtrl', function($scope, $timeout, Reclamos) {

  $scope.estabandera = true;
	
	$timeout(function(){
		 			$scope.estabandera = false;
		 		}, 3000);     
  $scope.reclamos=[];

  Reclamos.getReclamos().then(function(respuesta){
    $scope.reclamos=respuesta;
    console.info($scope.reclamos);
  },function(error){
    console.log(error);
  });

});