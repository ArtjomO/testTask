app.controller('adminViewCtrl', ['$scope', 'ws', 'tm', '$rootScope', function($scope, ws, tm, $rootScope){
    $scope.isAdmin = tm.isAdmin;
    
    $scope.tableList = tm.tableList;
    
    $scope.subscribeBtn = 'Subscribe';
    
    $scope.tableToAdd = {
        $type: 'add_table',
        after_id: null,
        table: {
            id: null,
            name: null,
            participants: null
        }
    };
    
    
    $scope.addTable = function(){
        ws.send($scope.tableToAdd);
    };
    
    $scope.updateTable = function(){
        ws.send({"$type": 'update_table', "table": $scope.tableToAdd.table})
    }
    
    $scope.removeTable = function() {
        ws.send({"$type": "remove_table", "id":$scope.tableToAdd.table.id})
    };
    
    $scope.subscribe = function(){
        if ($scope.subscribeBtn == 'Subscribe') {
            $scope.subscribeBtn = 'Unsubscribe';
            ws.send({$type: 'subscribe_tables'});   
        } else {
            $scope.subscribeBtn = 'Subscribe';
            ws.send({$type: 'unsubscribe_tables'});
        }
    };
    
    $scope.$on('response', function(event, data){
        
        $scope.$apply(function(){
            $scope.tableList = tm.tableList
            $scope.maxList = tm.maxList
        });  
    });
}]);