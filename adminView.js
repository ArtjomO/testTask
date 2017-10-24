app.controller('adminViewCtrl', function($scope, $rootScope, ws, tm, $location){
    $scope.maxList = tm.maxList;
    $scope.isAdmin = 'user';
    
    $scope.tableList = tm.tableList;
    
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
        $scope.$apply(function(){
            $scope.tableList = tm.tableList;
            $scope.maxList = tm.maxList;
            $scope.isAdmin = tm.isAdmin;
        })
    });
})