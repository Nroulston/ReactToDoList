import React, { Component } from 'react'

class CheckBox extends Component {
  render() {
    return (
      <div className='todo-item'>
        <input  type="checkbox"/>
        <p>placeholder text</p>
      </div>
    )
  }
}

export default CheckBox
