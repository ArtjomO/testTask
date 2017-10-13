(function(){
app.controller('lobbyCtrl', function($scope, ws){
    
    $scope.isAdmin = 'user'
    
//    $scope.tableLimit = function(){
//        if ($scope.isAdmin === 'user') {return 20} else {return $scope.tableList.length}
//    }
    
    
    
    $scope.tableList = [{name: 'test BJ', particpants: 2, id:1}];
    
    $scope.$on('response', function(event, data){
        var tables = $scope.tableList
        console.log($scope.tableList)
        
        switch (data.$type){
//            case 'login_succsessful':
//                $scope.$apply(function(){$scope.isAdmin = 'admin'});
//                break;
                
            case 'table_list':
                $scope.$apply(function(){$scope.tableList = tables.concat(data.tables)});
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
