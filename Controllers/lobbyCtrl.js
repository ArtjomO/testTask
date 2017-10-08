(function(){
app.controller('lobbyCtrl', function($scope, ws){

    $scope.tableList = [{name: 'test BJ', participants: 2, id:1}];
    
    $scope.$on('response', function(event, data){
        var tables = $scope.tableList
        
        switch (data.$type){
            case 'table_list':
                $scope.$apply(function(){$scope.tableList = data.tables});
                console.log($scope.tableList);///////////////////////////////////////////
                break;
                
                
            case 'table_removed':
                $scope.tableList.forEach(function(table){
                    if (table.id === data.id){
                        var index = $scope.tableList.indexOf(table);
                        console.log(index)///////////////////////////////////////////////
                        $scope.$apply(function(){$scope.tableList.splice(index,1);})
                        console.log($scope.tableList); ////////////////////////////  
                    };
                });
            break;
                
                
                
            case 'table_added':
                $scope.tableList.forEach(function(table){
                    if (table.id === data.after_id){
                        var index = $scope.tableList.indexOf(table) +1;
                        console.log(index); ////////////////////////////////////////
                        $scope.$apply(function(){$scope.tableList.splice(index,0,data.table)});
                        console.log($scope.tableList); ////////////////////////////////////////
                    };
                });
        };
    });
    
//    $scope.subscribe = function(type){
//        var sub = {$type: type};
//        ws.send(sub);
//
//        if (type == 'subscribe_tables') {
//            console.log('++Tables are subscribed..')
//        } else if (type == 'unsubscribe_tables') {
//            console.log('--Tables are unsubscribed..')
//        }
//    };
     
    $scope.createTable = function(type, name, participans) {
        console.log('Creating table')
        var table
        
        ws.send(table);     
    };
    
});   
})();
