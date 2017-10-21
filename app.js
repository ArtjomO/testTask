var app = angular.module('lobby', ['ui.router'])


app.config(function($stateProvider) {
   $stateProvider.adminState = {
        name: 'admin',
        url: '/admin',
        templateUrl: 'views/adminView.html',
        controller: 'adminViewCtrl'
      }

  
//  $stateProvider.state(adminState);
//    console.log('keke')
});