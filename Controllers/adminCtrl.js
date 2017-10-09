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
    
    var NewTable = function(){
        this.$type = $scope.table.$type
        this.after_id = $scope.table.after_id
        this.table = $scope.table.table
    }
    
    $scope.addTable = function(){
        var table = new NewTable();
        console.log('kek')
        
        switch (table.after_id) {
            case '1':
                
                $scope.tableList.push(table.table)
                console.log($scope.$parent.tableList)
                
                break;
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