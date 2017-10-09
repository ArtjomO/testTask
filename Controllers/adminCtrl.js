app.controller('adminCtrl', function($scope, ws){
    
    $scope.isAdmin = 'user';
    
    $scope.table = {
        $type: '',
        after_id: '',
        table: {
            id: '',
            name: '',
            participants: ''
        }
    }
    
    $scope.addTable = function(){
        var table = $scope.table;
        switch (table.after_id) {
            case '1':
                $scope.tableList.push(angular.copy(table.table));
                console.log($scope.$parent.tableList)
                break;
        } 
        
        $scope.table = {
            $type: '',
            after_id: '',
            table: {
                id: '',
                name: '',
                participants: ''
            }
        }
    };

    
    
    
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