//var socket = new WebSocket('wss://js-assignment.evolutiongaming.com/ws_api', 'ws');
(function(){ 
app.controller('loginCtrl', function($scope, ws){
 
    $scope.credentials = {
        $type: 'login',
        username: 'user1234',
        password: 'password1234'
    };
    
    $scope.isAdmin = 'user';

//$watch is watcning if ws.response was updated and then updates isAdmin
    $scope.$watch(function() {return ws.respMsg}, function(newVal, oldVal){
        console.log('$whatch triggered in loginCtrl');
        switch (newVal.$type) {
            case 'login_successful':
                $scope.isAdmin = newVal.user_type;
                break;
            case 'login_failed':
                alert('Inccorrect Login or Password');
                break;
        };       
    });
    
    $scope.aouthor = function(){
        ws.send($scope.credentials);
        ws.onmessage();
    };
    
});  
})();