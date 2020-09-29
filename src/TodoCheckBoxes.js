import React, { Component } from 'react'
import CheckBox from './CheckBox'
import todosData from './todosData'

class TodoCheckBoxes extends Component {
  
  

  render() {
    const todos = todosData.map( todo => <CheckBox key={todo.id} todo={todo} />)
    return (
      <div className ='todo-list'>
        {todos}
      </div>
    )
  }
}

export default TodoCheckBoxes
