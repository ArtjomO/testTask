//var socket = new WebSocket('wss://js-assignment.evolutiongaming.com/ws_api', 'ws');
(function(){

    
app.controller('login', ['$scope', function($scope){


    $scope.aouthor = function(){
        alert("kek")
        var socket = new WebSocket('wss://js-assignment.evolutiongaming.com/ws_api', 'ws');
        socket.send(JSON.stringify(                          ));
        
        socket.onmessage = function(event){
            alert(event.data);
        };
    }
    
    $scope.credentials = {
        $type: "login",
        username: '',
        password: ''
    }
    
    

    
    
}])
    
})();