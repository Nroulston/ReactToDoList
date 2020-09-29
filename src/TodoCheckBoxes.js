import React, { Component } from 'react'
import CheckBox from './CheckBox'
import todosData from './todosData'

class TodoCheckBoxes extends Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
  }

  
  

  render() {
   const todos = this.state.todos.map( todo => <CheckBox key={todo.id} todo={todo} />)
    return (
      <div className ='todo-list'>
        {todos}
      </div>
    )
  }
}

export default TodoCheckBoxes
