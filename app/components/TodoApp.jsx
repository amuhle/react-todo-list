var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function(){
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        }, {
          id: 2,
          text: 'Clean the yard'
        }, {
          id: 3,
          text: 'Go to the mall'
        }, {
          id: 4,
          text: 'Train like a boss'
        }
      ]
    };
  },
  render: function() {
    var {todos} = this.state;

    return (
      <div>
        <h1>Todo List</h1>
        <TodoList todos={todos} />
      </div>
    );
  }

});

module.exports = TodoApp;
