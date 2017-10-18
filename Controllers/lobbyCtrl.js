(function(){
app.controller('lobbyCtrl', function($scope, ws, tm){
    
//    $scope.isAdmin = 'user'
    $scope.maxList = tm.maxList;
    
    $scope.tableList = tm.tableList;
    
    $scope.$on('response', function(event, data){
        $scope.$apply(function(){
            $scope.tableList = tm.tableList
            $scope.maxList = tm.maxList
        })
    });
});   
})();
