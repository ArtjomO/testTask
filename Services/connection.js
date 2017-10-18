//WebSocket service which opens connection, can send messages from any $scope and handles responses
app.factory('ws', function($rootScope, tm){
    var stack = [];
    var onmessageDefer;
    var socket = {
        ws: new WebSocket('wss://js-assignment.evolutiongaming.com/ws_api', 'ws'),
        send: function(data) {
            data = JSON.stringify(data);
            if (socket.ws.readyState == 1) {
                socket.ws.send(data);
            } else {
                stack.push(data);
            }
        },
        onmessage: function(callback) {
            if (socket.ws.readyState == 1) {
                socket.ws.onmessage = handler;
            } else {
                onmessageDefer = callback;
            }
        }
    };
    
    socket.ws.onopen = function(event) {
        for (i in stack) {
            socket.ws.send(stack[i]);
        }
        stack = [];
        if (onmessageDefer) {
            socket.ws.onmessage = onmessageDefer;
            onmessageDefer = null;
        }
    };
    
// handler for WebSocket onmessage 
    function handler() {
        var respMsg = JSON.parse(event.data);
//received data is being broadcasted from $rootScope to every child $scope
        tm.setData(respMsg)
        tm.con(respMsg)
        $rootScope.$broadcast('response', respMsg);
        
    };
    return socket;
});