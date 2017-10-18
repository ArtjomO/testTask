app.controller('adminCtrl', function($scope, ws, tm, $rootScope){
    
    
    
    $scope.isAdmin = 'user';
//    $scope.isAdmin = tm.getIsAdmin();
    
    $scope.tableToAdd = {
        $type: null,
        after_id: null,
        table: {
            id: null,
            name: null,
            participants: null
        }
    };
    
    $scope.addTable = function(t){
        
        console.log(t);
        var afterId = t.after_id;
        var tableToAdd = angular.copy(t);
        var tableList = $scope.$parent.tableList
         //ws.send(tableToAdd('add_table'))
        switch (afterId) {
            case -1:
                tm.tableList.unshift(tableToAdd.table)
                break;
            case null:
                tm.tableList.push(tableToAdd.table);
                break;
            default:
                console.log(tableList)
                var index = tableList.findIndex(function(t){return t.id === afterId}) +1;
                tm.tableList.splice(index,0,tableToAdd.table)      
        }   
    };

    
    
    $scope.tableUpdate = function() {
        
    };
    
    
    $scope.removeTable = function() {
        
        tableList.forEach(function(table){
            if ($scope.tableToAdd.table.id === table.id){
                console.log(table)
                var index = tableList.indexOf(table);
                tableList.splice(index,1)
            }
        })
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