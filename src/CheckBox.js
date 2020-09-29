import React, { Component } from 'react'

class CheckBox extends Component {
 
 

  render() {

    return (
      <div className='todo-item'>
        <input  
          onChange={ () => this.props.handleChange(this.props.todo.id)} 
          type="checkbox" 
          checked={this.props.todo.completed}
          //onChange={event => props.handleChange(e)} if you don't have access to the event in the handle change function.
        />
        <p className={this.props.todo.completed ?'completedStyle' : null}>{this.props.todo.text}</p>
      </div>
    )
  }
}

export default CheckBox
