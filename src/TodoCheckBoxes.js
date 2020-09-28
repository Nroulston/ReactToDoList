import React, { Component } from 'react'
import CheckBox from './CheckBox'

class TodoCheckBoxes extends Component {
  render() {
    return (
      <div className ='todo-list'>
        <CheckBox />
        <CheckBox />
        <CheckBox />

      </div>
    )
  }
}

export default TodoCheckBoxes
