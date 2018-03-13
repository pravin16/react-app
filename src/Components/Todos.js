import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {
    
  render() {
      let todoItem;
      //console.log(this.props)
      if(this.props.todos){
        todoItem = this.props.todos.map(todo => {
             // console.log(project)
              return (
                <TodoItem key={todo.id} todos={todo} />
              )
          })
      }

    return (
      <div className="Todos">
       <h3>Todo Lists</h3>
        {todoItem}
      </div>
    );
  }
}

export default Todos;