app.controller('adminCtrl', function($scope, ws){
    
    $scope.isAdmin = 'user';
    $scope.tableName;
    $scope.afterId;
    $scope.id;
    

    
    $scope.$on('response', function(event, data){
        switch (data.$type) {
            case 'login_successful':
                console.log('is admin change admin ctrl');
                $scope.$apply(function(){$scope.isAdmin = 'admin';})
        }
    });
    

    
    
    $scope.subscribe = function(type){
        var sub = {$type: type};
        ws.send(sub);
         
        if (type == 'subscribe_tables') {
            console.log('++Tables are subscribed..')
        } else if (type == 'unsubscribe_tables') {
            console.log('--Tables are unsubscribed..')
        }
    };
});