app.controller('adminCtrl', function($scope, ws){
    
    
    
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
        
        console.log($scope.tableToAdd);
        var afterId = $scope.tableToAdd.after_id;
        var tableToAdd = angular.copy($scope.tableToAdd);
        var tableList = $scope.$parent.tableList
         //ws.send(tableToAdd('add_table'))
        switch (afterId) {
            case -1:
                tableList.unshift(tableToAdd.table)
                break;
            case null:
                tableList.push(tableToAdd.table);
                break;
            default:
                console.log(tableList)
                var index = tableList.findIndex(function(t){return t.id === afterId}) +1;
                tableList.splice(index,0,tableToAdd.table)      
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
        switch (data.$type) {
            case 'login_successful':
                console.log('is admin change admin ctrl');
                $scope.$apply(function(){$scope.isAdmin = 'admin'});
        }
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