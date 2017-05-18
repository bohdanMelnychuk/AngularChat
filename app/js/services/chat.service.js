function chatService($firebaseArray){
    var massagesRef = firebase.database().ref().child("messages");
    var chat = {}
    
        chat.getMasseges = function(){
            return $firebaseArray(massagesRef);
        }
        chat.filterMassages = function(){
            return $firebaseArray(massagesRef.limitToLast(15))
        }
        chat.sendMassageToDB = function(massage){
            chat.getMasseges().$add(massage)
        }
    
    return chat;
}
angular.module('chatApp').factory('ChatService',['$firebaseArray',chatService])