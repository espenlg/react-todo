import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyAMugWTv6BC4m2H2Oi6foTYKkBHGpcf-5I",
      authDomain: "espen-todo-app.firebaseapp.com",
      databaseURL: "https://espen-todo-app.firebaseio.com",
      storageBucket: "espen-todo-app.appspot.com",
    };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
