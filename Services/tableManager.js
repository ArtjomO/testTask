app.factory('tm', function($rootScope){ 
    return {
//        data: null,
        
        con: function(data){console.log(data)},
        
        tableList: [{name: 'test BJ', particpants: 2, id:1}],
        
        maxList: 2,
        
//        tbAddResp: null,
        
        remove_table_from_list: function(data){
            var index = this.tableList.findIndex(function(table){return table.id === data.id});
            this.tableList.splice(index,1);
        },
        
        add_to_table_list: function(tb){
            console.log(tb);
            var afterId = tb.after_id;
            var tableToAdd = angular.copy(tb);
            var tableList = this.tableList
//             ws.send(tableToAdd('add_table'))
            switch (afterId) {
                case -1:
                    this.tableList.unshift(tableToAdd.table)
                    break;
                case null:
                    this.tableList.push(tableToAdd.table);
                    break;
                default:
                    console.log(tableList)
                    var index = this.tableList.findIndex(function(t){return t.id === afterId}) +1;
                    this.tableList.splice(index,0,tableToAdd.table)      
            }   
        },
        
        setData: function(data){
            switch (data.$type) {
                case 'login_successful':
                    this.isAdmin = data.user_type;
                    this.maxList = 9999;
                    break;
                case 'login_failed':
                    alert('Inccorrect Login or Password');
                    this.isAdmin = 'user';
                    this.maxList = 2;
                    break;
                case 'table_list':
                    console.log(this)
                    this.tableList = this.tableList.concat(data.tables);
                    console.log(this.tableList)
                    break;
                case 'table_removed':
                    this.remove_table_from_list(data);
                    break;    
//                case 'removal_failed':
//                    this.remove_table_from_list(this.data);
//                    break;    
                case 'table_added':
                    var index = this.tableList.findIndex(function(table){return table.id === data.after_id}) +1;
                    this.tableList.splice(index,0,data.table);
                    break;
                
            };
        }
    }
    
});