app.controller('adminCtrl', function($scope, ws, tm, $rootScope, $timeout){
    
    $scope.isAdmin = 'user';
    
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
    
    $scope.removeTable = function() {
        ws.send({"$type": "remove_table", "id":$scope.tableToAdd.table.id})
    };
    
    
    
    $scope.subscribeBtn = 'Subscribe';
    $scope.subscribe = function(){
        if ($scope.subscribeBtn == 'Subscribe') {
            $scope.subscribeBtn = 'Unsubscribe';
            ws.send({$type: 'subscribe_tables'});   
        } else if ($scope.subscribeBtn == 'Unsubscribe'){
            $scope.subscribeBtn = 'Subscribe';
            ws.send({$type: 'unsubscribe_tables'});
        }
    };
    
    $scope.$on('response', function(event, data){
        $scope.$apply($scope.isAdmin = tm.isAdmin)
    });
});