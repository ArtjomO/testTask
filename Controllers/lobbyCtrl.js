(function(){
app.controller('lobbyCtrl', function($scope, ws, tm, $rootScope, $state){
    $scope.isAdmin = tm.isAdmin;
    $scope.maxList = 14
    $scope.displaySearch = false;
    $scope.displayEl = function(maxTbDisp, dispSearch){
        $scope.maxList = maxTbDisp;
        $scope.displaySearch = dispSearch;
    }
    
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
            $scope.isAdmin = tm.isAdmin;
            $scope.tableList = tm.tableList;
            $scope.displaySearchBar = tm.displaySearchBar;
        });
    });
    
    $rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
        console.log(toState)
        if (toState.name === 'usrState.adminState') {
            $scope.displayEl(9999, true)
        } else if (fromState.name === 'usrState.adminState') {
            $scope.displayEl(14, false)
        }
        
             
    });
});   
})();
