app.controller('adminCtrl', function($scope, ws, tm, $rootScope, $timeout){
    
    $scope.isAdmin = 'user';
    
    $scope.tableToAdd = {
        $type: null,
        after_id: null,
        table: {
            id: null,
            name: null,
            participants: null
        }
    };
    
    $scope.addTable = function(){
        //ws.send($scope.tableToAdd.table);
        tm.add_to_table_list($scope.tableToAdd);
    };
    
    
    
    $scope.removeTable = function() {
        
        ws.send({"$type": "remove_table", "id":$scope.tableToAdd.table.id})
    };
    
    
    $scope.$on('response', function(event, data){
        $scope.$apply($scope.isAdmin = tm.isAdmin)
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
});