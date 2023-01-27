import React, { Component } from 'react'
import loading from './spinner.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img height="50" src={loading} alt="spinner" />
      </div>
    )
  }
}

export default Spinner