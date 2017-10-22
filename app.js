var app = angular.module('lobby', ['ui.router'])


app.config(function($stateProvider) {
   $stateProvider.state('adminState', {
        url: '/admin',
        templateUrl: 'views/adminView.html',
        controller: 'adminViewCtrl'
      });
    $stateProvider.state('def', {
        url: null,
        
        
    });

  
//  $stateProvider.state(adminState);
//    console.log('keke')
});