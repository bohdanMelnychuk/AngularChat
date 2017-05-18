function enterSender(){
    return function(scope,element,attr){
        element.bind('keydown keypress',function(event){
            if(event.which === 13){
                scope.$apply(function(){
                    scope.$eval(attr.enterSender)
                })
                event.preventDefault();
            }
        })
    }
}
angular.module('chatApp').directive('enterSender',[enterSender])