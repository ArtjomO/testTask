
app.controller('loginCtrl', ['$scope', 'ws', 'tm', '$state', '$rootScope', function($scope, ws, tm, $state, $rootScope){
// to access $state from view
    $scope.$state = $state;
// if logged as admin - login form gets hidden and navigation between the views is shown
    $scope.isAdmin = tm.isAdmin;
    
    $scope.credentials = {
        $type: 'login',
        username: 'user1234',
        password: 'password1234'
    };
    
    $scope.aouthor = function(){
        ws.send($scope.credentials);
// initializes onmessage 
        ws.onmessage();
    };
// if resposne which is received via WS is $broadcasted - updates the scope and redirects to adminState
    $scope.$on('response', function(event, data){
        $scope.$apply( function(){
            $scope.isAdmin = tm.isAdmin
            if ( data.$type === 'login_successful') {$state.go('usrState.adminState')}
        });
    });
}]);  
