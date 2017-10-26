(function(){
app.controller('lobbyCtrl', function($scope, ws, tm, $rootScope){
    $scope.isAdmin = tm.isAdmin;
    $scope.maxList = tm.maxList;
    $scope.search;
    
    $scope.tableList = tm.tableList;
    
    $scope.delInput = function (){
        if ($scope.search==null)  {delete $scope.search}
    };
    
    $scope.tableListEmpty = function(){
        if ($scope.tableList.length === 0) {
            return true;
        }
    }
    
    $scope.$on('response', function(event, data){
        $scope.tableListEmpty()
        $scope.$apply(function(){
//            $scope.isAdmin = tm.isAdmin;
            $scope.tableList = tm.tableList;
            $scope.maxList = tm.maxList;
        });
    });
    
    
});   
})();
