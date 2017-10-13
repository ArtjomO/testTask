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
    }
    
    var tableToAdd = function(type){
            var t = $scope.tableToAdd;
            return {
                $type: type,
                after_id: JSON.parse(t.after_id),
                table: {
                    id: JSON.parse(t.table.id),
                    name: t.table.name,
                    participants: JSON.parse(t.table.participants)
                }
            };
        };
    
     $scope.addTable = function(){
        
        console.log(tableToAdd('add_table'));
         
         //ws.send(tableToAdd('add_table'))
        
        $scope.$parent.tableList.forEach(function(table){console.log(table.id)})
        switch (tableToAdd().after_id) {
            case -1:
                $scope.tableList.unshift(angular.copy(tableToAdd().table));
                console.log($scope.$parent.tableList)
                break;
            case -2:
                $scope.tableList.push(angular.copy(tableToAdd().table));
                break;
            default:
                $scope.$parent.tableList.forEach(function(table){
                    if (table.id === tableToAdd().after_id) {
                        var index = $scope.$parent.tableList.indexOf(table) + 1;
                        console.log(index)
                        $scope.$parent.tableList.splice(index,0,angular.copy(tableToAdd().table))
                    }
            });       
        }   
    };

    
    
    $scope.tableUpdate = function() {
        
    };
    
    
    $scope.removeTable = function() {
        
        $scope.$parent.tableList.forEach(function(table){
            if (tableToAdd().table.id === table.id){
                console.log(table)
                var index = $scope.$parent.tableList.indexOf(table);
                $scope.$parent.tableList.splice(index,1)
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