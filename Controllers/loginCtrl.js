//var socket = new WebSocket('wss://js-assignment.evolutiongaming.com/ws_api', 'ws');
(function(){ 
app.controller('loginCtrl', function($scope, ws){
 
    $scope.credentials = {
        $type: 'login',
        username: 'user1234',
        password: 'password1234'
    };
    
    $scope.isAdmin = 'user';
    
    
    $scope.$on('response', function(event, data){
        console.log(data);
        switch (data.$type) {
            case 'login_successful':
                $scope.isAdmin = data.user_type;
                $scope.$digest();
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