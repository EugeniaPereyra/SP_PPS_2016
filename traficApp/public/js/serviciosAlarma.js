'use strict';
angular.module('AlarmaService', ['firebase'])

  .service('Alarmas',['$firebaseArray',
    function($firebaseArray){
      var ref = firebase.database().ref('alarmas/');
      var alarmas = $firebaseArray(ref);

      this.cargarAlarma = cargarAlarma;
      this.getAlarmas = getAlarmas;
      this.getAlarmasMarcadores = getAlarmasMarcadores;


      function cargarAlarma(objeto){
        return alarmas.$add(objeto)
          .then(function(ref){
            return ref.key
          })
          .catch(function(e){
            return e
          })
      }

      function getAlarmas(){
        return alarmas;
      }

      function getAlarmasMarcadores(){
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


  
