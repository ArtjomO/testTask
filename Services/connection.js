app.service('ws', function(){
    var socket = new WebSocket('wss://js-assignment.evolutiongaming.com/ws_api', 'ws');  
    
    this.send = function (msg){
        socket.send(msg)
    }
    //problem: service cant hadle responses from server
    socket.onmessage = function(event) {
        console.log('response is received: '+ event.data);
            var resp = JSON.parse(event.data);
            if (resp.$type === 'login_failed') alert('Incorrect login or password')  ;
            $scope.resp = resp;
            console.log('parsed response: ' + $scope.resp)
    }

});