var app = angular.module('lobby', ['ui.router'])


app.config(function($stateProvider, $urlRouterProvider) {
   $stateProvider.state('adminState', {
        url: '/admin',
        templateUrl: 'views/adminView.html',
        controller: 'adminViewCtrl'
      });

//    $stateProvider.state('falseRoute',{
//        url: '*path',
//        template: '<b>kek</b>', //'views/adminView.html',
//        controller:'adminViewCtrl' 
//    });
    
    $urlRouterProvider.otherwise('/admin')
  
//  $stateProvider.state(adminState);
//    console.log('keke')
});