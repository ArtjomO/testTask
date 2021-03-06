var app = angular.module('lobby', ['ui.router'])

// Configuring routs. usrState will be default state and adminState is accessible
// when user is logged in as admin
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

//Creating two directives
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

//preventing redirection to adminState if not logged as admin
app.run(['$rootScope', 'tm', function($rootScope, tm){
    $rootScope.$on('$stateChangeStart', function(event, toState){
            if (toState.name === 'usrState.adminState' && tm.isAdmin != 'admin') {
                event.preventDefault()
            }
            
    });
}]);