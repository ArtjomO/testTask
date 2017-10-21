app.factory('tm', function(){ 
    return {
        
        con: function(data){console.log(data)},
        
        tableList: [],
        
        maxList: 2,
        
        remove_table_from_list: function(data){
            var index = this.tableList.findIndex(function(table){return table.id === data.id});
            this.tableList.splice(index,1);
        },
        
        setData: function(data){
            switch (data.$type) {
                case 'login_successful':
                    this.isAdmin = data.user_type;
                    this.maxList = 9999;
                    
                    console.log('logged in as: ' + this.isAdmin +'\n' + 'ma')
                    break;
                case 'login_failed':
                    alert('Inccorrect Login or Password');
                    this.isAdmin = 'user';
                    this.maxList = 2;
                    break;
                case 'table_list':
                    console.log(this)
                    this.tableList = data.tables; console.log('reassign')
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
                
            };
        }
    }
    
});