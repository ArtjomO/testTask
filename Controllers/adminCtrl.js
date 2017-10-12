app.controller('adminCtrl', function($scope, ws){
    
    $scope.isAdmin = 'user';
    
    $scope.tableToAdd = {
        $type: '',
        after_id: '',
        table: {
            id: '',
            name: '',
            participants: ''
        }
    }
    
    $scope.addTable = function(){
        var tableToAdd = $scope.tableToAdd;
//        $scope.$parent.tableList.forEach(function(table){console.log(table.id)})
//        switch (tableToAdd.after_id) {
//            case '-1':
//                $scope.tableList.unshift(angular.copy(tableToAdd.table));
//                console.log($scope.$parent.tableList)
//                break;
//            case '':
//                $scope.tableList.push(angular.copy(tableToAdd.table));
//                break;
//            default:
//                console.log($scope.tableToAdd.after_id, $scope.tableToAdd.table)
//                console.log($scope.tableToAdd.after_id)
//                console.log($scope.$parent.tableList[2].id)
//                $scope.$parent.tableList.forEach(function(table){//$scope.$parent.tableList.indexOf(table)
//                    console.log(table.id)
//                    
//                    if (table.id === $scope.tableToAdd.after_id) {console.log(true)} else{console.log(false)}
////                    if (table.id === $scope.tableToAdd.after_id) {
////                        var index = $scope.$parent.tableList.indexOf(table) + 1;
////                        console.log(index)
////                        $scope.$parent.tableList.splice(index,0,angular.copy(tableToAdd.table))
////                    }
//                })
//        } 
        
        if (tableToAdd.after_id === '-1') {
            $scope.tableList.unshift(angular.copy(tableToAdd.table));
            console.log($scope.$parent.tableList);
        } else if (tableToAdd.after_id === '') {
            $scope.tableList.push(angular.copy(tableToAdd.table));
        } else if (tableToAdd.after_id >= 0) {
            console.log('kek')
            for (var i=0; i < $scope.$parent.tableList.length; i++) {
                 if ($scope.$parent.tableList[i].id === JSON.parse(tableToAdd.after_id)) {
                     console.log(true)
                     console.log($scope.$parent.tableList.indexOf($scope.$parent.tableList[i]))
                 }
                    
            }
            
            
//            $scope.$parent.tableList.forEach(function(table){
//                if (table.id == 13824)
//                $scope.$parent.tableList.indexOf(table)
////                function lel() {
////                    if (table.id === $scope.tableToAdd.after_id) {
////                        console.log($scope.$parent.tableList.indexOf(table))
////                    }
//                //lel();
////                }
//            });
        }
        
//        $scope.table = {
//            $type: '',
//            after_id: '',
//            table: {
//                id: '',
//                name: '',
//                participants: ''
//            }
//        }
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