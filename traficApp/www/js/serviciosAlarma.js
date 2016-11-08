'use strict';
angular.module('AlarmaService', ['firebase'])

  .service('Alarmas',['$firebaseArray',
    function($firebaseArray){
      var ref = firebase.database().ref('alarmas/');
      var alarmas = $firebaseArray(ref);

      this.cargarAlarma = cargarAlarma;
      this.getAlarmas = getAlarmas;


      function cargarAlarma(objeto){
        return alarmas.$add(objeto).then(function(ref){
            return ref.key;
          })
          .catch(function(e){
            return e;
          })
      }

      function getAlarmas(){
        return alarmas;
      }
    }]);


  
