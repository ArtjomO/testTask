(function(){
app.controller('lobbyCtrl', function($scope, ws){
    $scope.tables;
    
    $scope.subscribe = function(type){
        var sub = {$type: type};
        ws.send(sub);
        if (type == 'subscribe_tables') {
            console.log('++Tables are subscribed..')
        } else if (type == 'unsubscribe_tables') {
            console.log('--Tables are unsubscribed..')
        }
    };
    
    function pushTablelist(){
        var resp = JSON.parse(event.data);
        if (resp.$type === 'table_list') {
            $scope.tables = resp.tables;
            concole.log($scope.tables)
        }
    }
     
    $scope.createTable = function(type, name, participans) {
        console.log('Creating table')
        var table
        
        ws.send(table);     
    };
    
    ws.onmessage(pushTablelist);
    
});   
})();
