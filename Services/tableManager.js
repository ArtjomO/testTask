app.factory('tm', function($rootScope){ 
    return {
        con: function(data){console.log(data)},
        
        tableList: [{name: 'test BJ', particpants: 2, id:1}],
        
        maxList: 2,
        
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
                    var index = this.tableList.findIndex(function(table){return table.id === data.id});
                    this.tableList.splice(index,1);
                    break;    
                case 'table_added':
                    var index = this.tableList.findIndex(function(table){return table.id === data.after_id}) +1;
                    this.tableList.splice(index,0,data.table);
                    break;
                
            };
        }
    }
    
});