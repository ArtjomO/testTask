(function(){

app.controller('lobbyCtrl', ['$scope', function($scope){
    
    $scope.tables = [];
    
    $scope.createTable = function(type, name, participans) {
        console.log('Function crate table works..')
        var table = {
            $type: type,
            after_id: 1,
            table: {
                name: name,
                participans: participans
            }
        };
        
        var socket = new WebSocket('wss://js-assignment.evolutiongaming.com/ws_api', 'ws');
        
        socket.onopen = function (){
            socket.send(JSON.stringify(table));
        };
        
        socket.onmessage = function (event) {
            alert(event.data)
        }
        
        
    };
    
}]);   
    

    
    
    
    
app.directive('lobbyDir', function(){
    return {
        restrict: 'E',
        templateUrl: '../directives/lobby-dir.html'
    };
});
})();




    
    