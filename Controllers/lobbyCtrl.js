(function(){

app.controller('lobbyCtrl', ['$scope', function(){
    
    $scope.tables = [];
    
    function crateTable(type, name, participans) {
        var tabel = {
            $type: type,
            after_id: 1,
            table: {
                name: name,
                participans: participans
            }
        };
        
        
    }
    
}]);   
    

    
    
    
    
app.directive('lobbyDir', function(){
    return {
        restrict: 'E',
        templateUrl: '../directives/lobby-dir.html'
    };
});
})();




    
    