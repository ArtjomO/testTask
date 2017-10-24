(function(){
app.controller('lobbyCtrl', function($scope, ws, tm){
    $scope.isAdmin = tm.isAdmin;
    $scope.maxList = tm.maxList;
    $scope.search;
    
    $scope.tableList = tm.tableList;
    
    $scope.delInput = function (){
        if ($scope.search==null)  {delete $scope.search}
    }
    
    $scope.$on('response', function(event, data){
        $scope.$apply(function(){
            $scope.isAdmin = tm.isAdmin
            $scope.tableList = tm.tableList
            $scope.maxList = tm.maxList
        })
    });
});   
})();
