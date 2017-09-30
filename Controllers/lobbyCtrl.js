(function(){

app.controller('lobbyCtrl', function($scope, ws){
    
    $scope.tables = [];
    
    $scope.createTable = function(type, name, participans) {
        console.log('Creating table')
        var table = {
            $type: type,
            after_id: 1,
            table: {
                name: name,
                participans: participans
            }
        };
        
        
        ws.send(JSON.stringify(table))
        
    };
    
});   
    

    
    
    
    
app.directive('lobbyDir', function(){
    return {
        restrict: 'E',
        templateUrl: '../directives/lobby-dir.html'
    };
});
})();




    
    