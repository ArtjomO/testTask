//var socket = new WebSocket('wss://js-assignment.evolutiongaming.com/ws_api', 'ws');
(function(){ 
app.controller('loginCtrl', function($scope, ws, tm){
    $scope.isAdmin = 'user';
 
    $scope.credentials = {
        $type: 'login',
        username: 'user1234',
        password: 'password1234'
    };
    
    $scope.aouthor = function(){
        ws.send($scope.credentials);
        ws.onmessage();
    };
    
    $scope.$on('response', function(event, data){
        $scope.$apply($scope.isAdmin = tm.isAdmin)
    });
    
});  
})();