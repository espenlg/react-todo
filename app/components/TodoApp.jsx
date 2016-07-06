var React = require('React');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState:  function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean the yard'
        },
        {
          id: 3,
          text: 'Catch the fish'
        },
        {
          id: 4,
          text: 'Feed the cat'
        }
      ]
    };
  },

  render: function() {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    )
  }
});

module.exports = TodoApp;
