app.directive('loginDir', function(){
   return {
       transclude:true,
       restrict: 'E',
       templateUrl: '../directives/login-dir.html'
   } 
});