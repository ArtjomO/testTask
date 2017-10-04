(function(){
app.controller('lobbyCtrl', function($scope, ws){
    $scope.ws = ws;
    
    $scope.respMsg = ws.ret;
    
    $scope.tableList = [{name: 'test BJ', participants: 2, id:1}];
    
    $scope.$watch(function(){return ws.respMsg}, function(newVal, oldVal){
        console.log('$watch triggered in lobbyCtrl');
        
        switch (newVal.$type){
            case 'table_list':
                $scope.tableList = newVal.tables;
                console.log($scope.tables);
                console.log(newVal);
                break;
            case 'table_removed':
                console.log('HURRRAAAAAAAAAAAAAAAAAY!!!!')
        }
    }, true);
    
    
    
    
    $scope.subscribe = function(type){
        var sub = {$type: type};
        ws.send(sub);

        if (type == 'subscribe_tables') {
            console.log('++Tables are subscribed..')
        } else if (type == 'unsubscribe_tables') {
            console.log('--Tables are unsubscribed..')
        }
    };
     
    $scope.createTable = function(type, name, participans) {
        console.log('Creating table')
        var table
        
        ws.send(table);     
    };
    
});   
})();
