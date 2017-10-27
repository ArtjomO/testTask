var app = angular.module('lobby', ['ui.router'])

// Configuring routs
app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('usrState',{
        url: '/usr',
        template: '<div ui-view=""></div><lobby-dir></lobby-dir>'
    });
    
   $stateProvider.state('usrState.adminState', {
        url: '/admin',
        templateUrl: 'views/adminView.html',
        controller: 'adminViewCtrl'
      });
    $urlRouterProvider.otherwise('/usr')
});

//Creating directives
app.directive('lobbyDir', function(){
    return {
        restrict: 'E',
        templateUrl: 'Directives/lobby-dir.html'
    };
});

app.directive('loginDir', function(){
   return {
       restrict: 'E',
       templateUrl: '../directives/login-dir.html'
   } 
});

app.run(['$rootScope', 'tm', function($rootScope, tm){
    $rootScope.$on('$stateChangeStart', function(event, toState){
            if (toState.name === 'usrState.adminState' && tm.isAdmin != 'admin') {
                event.preventDefault()
            }
            
    });
}]);