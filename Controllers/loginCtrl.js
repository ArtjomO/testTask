//var socket = new WebSocket('wss://js-assignment.evolutiongaming.com/ws_api', 'ws');
(function(){ 
app.controller('loginCtrl', function($scope, ws){
 
    $scope.username = 'user1234';
    $scope.password = 'password1234';
    $scope.isAdmin = 'user';
    
    $scope.aouthor = function(){
        console.log('aouthorisation in process..')
        var credentials = {
            $type: 'login',
            username: $scope.username,
            password: $scope.password,
        };
        
        function succsessAouth() {
            console.log('response is received: '+ event.data);
            var resp = JSON.parse(event.data);
            switch(resp.$type){
                case 'login_successful':
                    $scope.isAdmin = 'admin';
                    break;
                case 'login_failed':
                    alert('Incorrect login or password');
                    break;
            };
            console.log($scope.showAdmin)
        };
        
        ws.send(credentials);
        ws.onmessage(succsessAouth);
    };
});  
})();