function chatCtrl(ChatService,$firebaseAuth){
    var vm = this;
    var auth = $firebaseAuth();
    
    vm.messages = ChatService.getMasseges();
    vm.showLimitMassage = ChatService.filterMassages();
    
    auth.$onAuthStateChanged(function(authData){
        vm.author = authData;
        console.log(authData)
    });
    
    vm.sendMassage = function(){
        if(vm.author != null){
            var massage = {
                authorName : vm.author.displayName,
                authorId : vm.author.uid,
                authorPhoto : vm.author.photoURL,
                text : vm.newMassage
            }
        }else{
            alert('Register now!!!')
        }
        
        
        if(vm.newMassage != undefined){
            ChatService.sendMassageToDB(massage)
            vm.newMassage = null;
        }else{
            alert('Typing massage!!!')
        }
        
    };
    
    vm.login = function(){
        auth.$signInWithPopup('google');
    };
    vm.logout = function(){
        auth.$signOut();
    }
    
}
 
angular.module('chatApp')
    .controller('chatCtrl',['ChatService','$firebaseAuth',chatCtrl])