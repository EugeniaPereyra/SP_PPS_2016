// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', [
  'ionic', 
  'starter.controllers',
  'menu.controllers',
  'alarma.controllers',
  'mapa.controllers',
  'reclamos.controllers',
  'AlarmaService',
  'ngMap',
  'ngCordova',
  'ionic-modal-select',
  'ionic-ratings',
  'grafico.controllers',
  'ReclamoService',
  'highcharts-ng'
  ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    if( window.plugins && window.plugins.NativeAudio ) {		
		 window.plugins.NativeAudio.preloadSimple('SonidoAccidente', 'sonidosAlarmas/SonidoAccidente.mp3', function(msg){
        }, function(msg){
            console.log( 'Error: ' + msg );
        });
		
	  window.plugins.NativeAudio.preloadSimple('SonidoAmbulancia', 'sonidosAlarmas/SonidoAmbulancia.mp3', function(msg){
        }, function(msg){
            console.log( 'Error: ' + msg );
        });
		
	  window.plugins.NativeAudio.preloadSimple('SonidoAnimal', 'sonidosAlarmas/SonidoAnimal.mp3', function(msg){
        }, function(msg){
            console.log( 'Error: ' + msg );
        });
		
	  window.plugins.NativeAudio.preloadSimple('SonidoMecanico', 'sonidosAlarmas/SonidoMecanico.mp3', function(msg){
        }, function(msg){
            console.log( 'Error: ' + msg );
        });
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    cache: false,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl',
	  cache: false
    })

  .state('app.alarmas', {
    url: '/alarmas',
    views: {
      'menuContent': {
        templateUrl: 'templates/alarmas.html',
        controller: 'alarmasCtrl'
      }
    }
  })



  .state('app.mapa', {
      url: '/mapa',
      cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/mapaAlarmas.html',
          controller: 'mapaCtrl'
        }
      }
    })

    .state('app.reclamar', {
      url: '/reclamar',
      views: {
        'menuContent': {
          templateUrl: 'templates/reclamos.html',
          controller: 'reclamosCtrl'
        }
      }
    })

    .state('app.grafico', {
      url: '/grafico',
      cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/grafico.html',
          controller: 'graficoCtrl'
        }
      }
    })

    .state('app.reclamos', {
      url: '/reclamos',
      views: {
        'menuContent': {
          templateUrl: 'templates/mostrar.html',
          controller: 'reclamosMostrarCtrl'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
