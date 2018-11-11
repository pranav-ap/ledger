import React, { Component } from 'react'
import { connect } from 'react-redux'

import { startLogin } from './../actions/user-actions'

class Welcome extends Component {
  handleLogin(e) {
    e.preventDefault()

    const { dispatch } = this.props

    dispatch(startLogin(this.refs.password.value))
  }

  render() {
    return (
      <div className='columns is-mobile Welcome'>
        <div className='column Welcome-column is-7'>
          <h1>Welcome to Ledger</h1>
          <input
            className='input'
            ref='password'
            type='text'
            placeholder='Enter Password'></input>
          <a
            className='button is-normal'
            onClick={this.handleLogin.bind(this)}>Login</a>
        </div>
      </div>
    )
  }
}

export default connect()(Welcome)
