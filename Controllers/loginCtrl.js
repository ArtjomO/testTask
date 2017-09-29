//var socket = new WebSocket('wss://js-assignment.evolutiongaming.com/ws_api', 'ws');
(function(){

    
app.controller('loginCtrl', ['$scope', function($scope){
 
    $scope.$type = 'login';
    $scope.username = 'user1234';
    $scope.password = 'password1234';
    $scope.resp = 'kek'
    $scope.aouthor = function(){
        console.log('aouthorisation in process..')
        var credentials = {
            $type: 'login',
            username: $scope.username,
            password: $scope.password,
        };
        
        
        
        
        var socket = new WebSocket('wss://js-assignment.evolutiongaming.com/ws_api', 'ws');
        
// necessary to wait untill socket will be opened
        socket.onopen = function(){
            console.log('WebSocket onpened!')
            socket.send(JSON.stringify(credentials));
            console.log('credentials are sent: '+credentials.username)
        }
        
        socket.onmessage = function(event){
            console.log('response is received: '+ event.data);
            var resp = JSON.parse(event.data);
            if (resp.$type === 'login_failed') alert('Incorrect login or password')  ;
            $scope.resp = resp;
            console.log('parsed response: ' + $scope.resp)
        };    
    };

    
}]);


app.directive('loginDir', function(){
   return {
       restrict: 'E',
       templateUrl: '../directives/login-dir.html'
   } 
});
    
})();