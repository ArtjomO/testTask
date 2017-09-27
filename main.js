//var socket = new WebSocket('wss://js-assignment.evolutiongaming.com/ws_api', 'ws');
(function(){

    
app.controller('login', ['$scope', function($scope){

    $scope.credentials = {
        $type: "login",
        username: ' ',
        password: ''
    }
    
    $scope.$type = 'login';
    $scope.username = '';
    $scope.password = '';
    

    $scope.aouthor = function(){
        
        
        alert($scope.credentials.username, $scope.credentials.password)
        var socket = new WebSocket('wss://js-assignment.evolutiongaming.com/ws_api', 'ws');
        
// necessary to wait untill socket will be opened
        socket.onopen = function(){
            alert($scope.username, $scope.password)
            socket.send(JSON.stringify({$scope.$type, $scope.username, $scope.password}));
        }
        
        socket.onmessage = function(event){
            alert(event.data);
        };
    }
    
    
    
    

    
    
}])
    
})();