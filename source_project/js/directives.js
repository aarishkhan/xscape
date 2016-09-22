/**
 * Created by Aarish on 9/9/16.
 */


angular.module('app.directives',[])

.directive('horizontalScrollFooter',function(){
  return{

    restrict:'EA',
    replace:true,
    transclude: true,
    templateUrl:'horizontalScrollFooter.html',
    controller:'HorizontalScrollFooterCtrl'
    
  }
})
