'use strict';
angular.module('ReclamoService', ['firebase'])

  .service('Reclamos',['$firebaseArray',
    function($firebaseArray){
      var ref = firebase.database().ref('reclamos/');
      var reclamos = $firebaseArray(ref);

      this.getReclamos = function(){
        return reclamos.$loaded().then(function(respuesta){
          return respuesta;
        });
    }

  }]);


  
