import React, { Component } from 'react'

class CheckBox extends Component {
  render() {
    return (
      <div>
        <input className='todo-item' type="checkbox"/>
        <p>placeholder text</p>
      </div>
    )
  }
}

export default CheckBox
