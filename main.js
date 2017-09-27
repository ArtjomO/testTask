//var socket = new WebSocket('wss://js-assignment.evolutiongaming.com/ws_api', 'ws');
(function(){

    
app.controller('login', ['$scope', function($scope){


    $scope.aouthor = function(){
        var socket = new WebSocket('wss://js-assignment.evolutiongaming.com/ws_api', 'ws');
        socket.send(JSON.stringify($scope.credentials))
    }
    
    $scope.credentials = {
        $type: "login",
        username: '',
        password: ''
    }
    

    
    
}])
    
})();