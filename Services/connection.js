app.factory('ws', function(cb){
    var stack = [];
    var onmessageDefer;
    var socket = {
        data: {},
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
    
    
    function handler() {
        var data = JSON.parse(event.data);
            console.log('handler works')
            socket.data = data;
            console.log('socket data is changed: '+ socket.data)
    };
    
    
    return socket;
    
    
    
});