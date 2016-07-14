var firebase = require('firebase');

var config = {
    apiKey: "AIzaSyAMugWTv6BC4m2H2Oi6foTYKkBHGpcf-5I",
    authDomain: "espen-todo-app.firebaseapp.com",
    databaseURL: "https://espen-todo-app.firebaseio.com",
    storageBucket: "espen-todo-app.appspot.com",
  };

firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.child('todos').once('value').then((snapshot) => {
  var todos = {};
  var keys = Object.keys(snapshot.val());
  for (var key in keys) {
    var todosRef = firebaseRef.child('todos');
    todosRef.child(keys[key]).once('value').then((todo) => {
      todos = {
        ...todos,
        {
          id: keys[key],
          text: todo.val().text,
          completed: todo.val().completed,
          createdAt: todo.val().createdAt
        }
      }
    });
  };
  console.log(todos);

//  console.log(snapshot.val());
}, (e) => {
  console.log('Unable to fetch value', e);
});

// firebaseRef.set({
//   app: {
//     name: 'Todo App',
//     version: '1.0.0'
//   },
//   isRunning: true,
//   user: {
//     name: 'Espen',
//     age: 40
//   }
// });
//
// var todosRef = firebaseRef.child('todos');
//
// todosRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
//
// todosRef.push({title: 'Walk the dog'});
// todosRef.push({title: 'Walk the cat'});

// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });
//
// var newNoteRef = notesRef.push({
//   text: 'Walk the dog!'
// });
//
// console.log(newNoteRef.key);

// firebaseRef.child('user').on('value', (snapshot) => {
//   console.log('Got value', snapshot.val());
// });
//
// firebaseRef.child('user').update({name: 'Jonathan'});

// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('Got entire database', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value', e);
// });
//
// firebaseRef.on('value', (snapshot) => {
//   console.log('Got value', snapshot.val());
// });
//
// firebaseRef.off();
//
// firebaseRef.update({'isRunning':false});
