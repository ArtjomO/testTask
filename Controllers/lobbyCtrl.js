(function(){
app.controller('lobbyCtrl', function($scope, ws){
    $scope.ws = ws;
    
    $scope.respMsg = ws.respMsg;
    
    $scope.tableList = [{name: 'test BJ', participans: 2, id:1}];
    
    $scope.$watch('respMsg', function(newVal, oldVal){
        if (oldVal) console.log('$watch triggered in lobbyCtrl');
        
        
        
//        if (newVal.$type === 'table_list') {
//            $scope.tableList = newVal.tables;
//            console.log(newVal)
//        }
//        switch (newVal){
//            case 'table_list':
//                scope.tableList = newVal.tables;
//                console.log($scope.tables)
//        }
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
