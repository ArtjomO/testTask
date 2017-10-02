app.factory('cb', function(){
    return {
        handler: function(){
            ws.data = JSON.parse(event.data);
        }
    };
    
});