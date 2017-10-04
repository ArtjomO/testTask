(function(){
app.controller('lobbyCtrl', function($scope, ws){

    $scope.tableList = [{name: 'test BJ', participants: 2, id:1}];
    
    $scope.$on('response', function(event, data){
        switch (data.$type){
            case 'table_list':
                $scope.$apply(function(){$scope.tableList = data.tables});
                break;
            case 'table_removed':
                $scope.$apply(function(){
                    $scope.tableList.forEach(function(table){
                        if (table.id === data.id){
                            var index = $scope.tableList.indexOf(data);
                            $scope.tableList.splice(index);
                            console.log($scope.tableList)
                        }
                    })
                });
        };
    });
    
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
