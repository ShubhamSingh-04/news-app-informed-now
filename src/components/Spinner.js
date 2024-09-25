import React, { Component } from 'react'
import spinner from '../spinner.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center mx-auto'>
        <img src={spinner} alt="loading"/>
      </div>
    )
  }
}
