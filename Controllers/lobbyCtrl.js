(function(){
app.controller('lobbyCtrl', function($scope, ws, tm, $rootScope, $state){
// maxList reduces the amount of table rendered by 15 when in usrState and
// when in adminState limit of tables that can be rendered is 9999
    $scope.maxList = 15
    $scope.displaySearch = false;
    
//When $stateChangeStart ev. received, this function will change variables:
    function displayEl(maxTbDisp, dispSearch){
        $scope.maxList = maxTbDisp; // 9999
        $scope.displaySearch = dispSearch; //true
    }
    
    $scope.search;
//Delete input value so full tableList could be rendered
    $scope.delInput = function (){
        if ($scope.search==null)  {delete $scope.search}
    };
    
    $scope.tableList = tm.tableList;
    
//Displaying "no tables" msg , when tableList is empty
    $scope.tableListEmpty = function(){
        if ($scope.tableList.length === 0) {
            return true;
        }
    }
    
//When server response is received updates the scope variables
    $scope.$on('response', function(event, data){
        $scope.tableListEmpty()
        $scope.$apply(function(){
            $scope.tableList = tm.tableList;
        });
    });

//When $stateChangeStart received
    $rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
        if (toState.name === 'usrState.adminState') {
            displayEl(9999, true)
        } else if (fromState.name === 'usrState.adminState') {
            displayEl(15, false)
        } 
    });
});   
})();
