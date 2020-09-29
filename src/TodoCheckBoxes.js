import React, { Component } from 'react'
import CheckBox from './CheckBox'
import todosData from './todosData'

class TodoCheckBoxes extends Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
  }
  }
  
  handleChange = (id) => {
   
    
    this.setState( prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo = {...todo, completed: !todo.completed}
          todo.completed = !todo.completed
        }
        return todo
        
      })
      
      return {
        todos: updatedTodos
      }
      
    })
  }

  render() {
   const todos = this.state.todos.map( todo => <CheckBox 
  key={todo.id} todo={todo} handleChange={this.handleChange} />)
    return (
      <div className ='todo-list'>
        {todos}
      </div>
    )
  }
}

export default TodoCheckBoxes
