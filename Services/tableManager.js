app.factory('tm', function($rootScope){ 
    return {
        tableList: [],
        
        isAdmin: null,
        
        remove_table_from_list: function(data){
//findes the index of table in list and removes it
            var index = this.tableList.findIndex(function(table){return table.id === data.id});
            this.tableList.splice(index,1);
        },
// receives the response data and acts according to resp. $type
        Handler: function(data){
            switch (data.$type) {
                case 'login_successful':
                    this.isAdmin = data.user_type;
                    this.maxList = 9999;
                    break;
                case 'login_failed':
                    alert('Inccorrect Login or Password');
                    this.isAdmin = 'user';
                    break;
                case 'table_list':
                    this.tableList = data.tables;
                    break;
                case 'table_removed':
                    this.remove_table_from_list(data);
                    break;    
                case 'removal_failed':
                    alert(data.$type + ' ID: ' + data.id)
                    break;    
                case 'table_added':
                    var index = this.tableList.findIndex(function(table){return table.id === data.after_id}) +1;
                    this.tableList.splice(index,0,data.table);
                    break;
                case 'table_updated':
                    var index = this.tableList.findIndex(function(table){return table.id === data.table.id});
                    this.tableList[index].participants = data.table.participants
                    this.tableList[index].name = data.table.name;
                    alert('table: ' + data.table.id + ' is updated')
                    break;
                case 'not_authorized':
                    alert('Not aouthorized, please log in..');
                    break;
            };
        }
    }
    
});