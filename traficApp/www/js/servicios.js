'use strict';
angular
  .module('AlarmaService', ['firebase'])

  .service('Alarmas',['$firebaseArray',
    function($firebaseArray){

      this.cargarAlarma = cargarAlarma;
      this.getAlarmas = getAlarmas;
      this.getAlarmasMarcadores = getAlarmasMarcadores;


      function cargarAlarma(objeto){
        var ref = firebase.database().ref('alarmas/');
        var alarmas = $firebaseArray(ref);

        return alarmas.$add(objeto)
          .then(function(ref){
            return ref.key
          })
          .catch(function(e){
            return e
          })
      }

      function getAlarmas(){
        var ref = firebase.database().ref('alarmas/');
        var alarmas = $firebaseArray(ref);
        return alarmas;
      }

      function getAlarmasMarcadores(){
        var ref = firebase.database().ref('alarmas/');
        var alarmas = $firebaseArray(ref);
        return alarmas.$loaded(function(data){
          return agregarIconos(data);
        }, function(e){
          return e;
        })
      }

      function agregarIconos(data){
        data.forEach(function(item){
          switch (item.tipo) {
            case "Ambulancia":
              item.icon = "Ambulancia.png";
              break;
            case "Accidente":
              item.icon = "Accidente.png";
              break;
            case "Mecanico":
              item.icon = "Mecanico.png";
              break;
            case "Animal-Suelto":
              item.icon = "Animal.png";
              break;
            default:
              item.icon = "Accidente.png";

          }
        })
        return data;
      }
    }]);


  
