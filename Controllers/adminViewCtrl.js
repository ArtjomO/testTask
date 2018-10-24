app.controller('adminViewCtrl', ['$scope', 'ws', 'tm', '$rootScope', function($scope, ws, tm, $rootScope){
// checking if user is logged in as admin
    $scope.isAdmin = tm.isAdmin;

//array of tables
    $scope.tableList = tm.tableList;
    
    $scope.subscribeBtn = tm.subscribed;
    
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
        if (tm.subscribed == 'Subscribe') {
            tm.subscribed = 'Unsubscribe';
            $scope.subscribeBtn = tm.subscribed;
            ws.send({$type: 'subscribe_tables'});
        } else {
            tm.subscribed = 'Subscribe';
            $scope.subscribeBtn = tm.subscribed;
            ws.send({$type: 'unsubscribe_tables'});
        }
    };
    
// updating the view when srver response is received
    $scope.$on('response', function(event, data){
        
        $scope.$apply(function(){
            $scope.isAdmin = tm.isAdmin;
            $scope.tableList = tm.tableList
            $scope.maxList = tm.maxList
        });  
    });
}]);