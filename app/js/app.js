// Initialize Firebase
var config = {
    apiKey: "AIzaSyDDBbSHfSCGDoHx2tmhEBWf2mehAMYR7mE",
    authDomain: "chatapp-b316c.firebaseapp.com",
    databaseURL: "https://chatapp-b316c.firebaseio.com",
    storageBucket: "chatapp-b316c.appspot.com",
    messagingSenderId: "724969367065"
};
firebase.initializeApp(config);
angular.module('chatApp',['firebase']);