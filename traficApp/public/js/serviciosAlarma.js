'use strict';
angular.module('AlarmaService', ['firebase'])

  .service('Alarmas',['$firebaseArray',
    function($firebaseArray){
      this.ref = firebase.database().ref('alarmas/');
      this.alarmas = $firebaseArray(this.ref);

      this.cargarAlarma = function(objeto){
          this.alarmas.$add(objeto).then(function(ref){
                var id = ref.key;
                console.log("Se agrego el id " + id);
          });
      };

      this.getAlarmas = function(){
            return this.alarmas.$loaded().then(function(datos){
                  return datos;
              })
          };
    }]);


  
