import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import '../styles/App.scss'

import { startLogin } from './../actions/auth-actions'

class Login extends Component {
  handleLogin() {
    const { dispatch } = this.props
    dispatch(startLogin(this.refs.password.value))
  }

  render() {
    return (
      <div className="columns is-mobile Login">
        <div className="column login-column is-4">
          <h1 className="title custom-title has-text-centered"><i className='fas fa-money-check-alt'></i>&nbsp;&nbsp;Ledger&nbsp;&nbsp;</h1>
          <input className="input" type="password" id="password" ref="password" placeholder="Password" />
          <a className='button is-primary is-pulled-right' onClick={() => this.handleLogin()}>Login</a>
        </div>
      </div>
    )
  }
}

export default withRouter(connect()(Login))