(function(){
app.controller('lobbyCtrl', function($scope, ws){
    $scope.tableList = [{name: 'test BJ', participants: 2, id:1}];
    
    $scope.$on('response', function(event, data){
        var tables = $scope.tableList
        
        switch (data.$type){
            case 'table_list':
                $scope.$apply(function(){$scope.tableList = data.tables});
                break;
                  
            case 'table_removed':
                $scope.tableList.forEach(function(table){
                    if (table.id === data.id){
                        var index = $scope.tableList.indexOf(table);
                        $scope.$apply(function(){$scope.tableList.splice(index,1)})
                    };
                });
            break;
                
            case 'table_added':
                $scope.tableList.forEach(function(table){
                    if (table.id === data.after_id){
                        var index = $scope.tableList.indexOf(table) +1;
                        $scope.$apply(function(){$scope.tableList.splice(index,0,data.table)});
                    };
                });
        };
    });
});   
})();
