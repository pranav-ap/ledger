import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import SignInWidget from './SignInWidget'
import { withAuth } from '@okta/okta-react'

import { startGetAllTransactions } from './../actions/transactions-actions'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      authenticated: false
    }

    this.checkAuthentication()
  }

  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated()
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated })
    }
  }

  componentDidUpdate() {
    this.checkAuthentication()
  }

  onSuccess = res => {
    return this.props.auth.redirect({
      sessionToken: res.session.token
    })
  }

  onError = err => {
    console.log('error logging in', err)
  }

  async setToken() {
    const token = await this.props.auth.getAccessToken()
    localStorage.setItem('x-auth', token)
  }

  render() {
    if (this.state.authenticated) {
      this.setToken()

      const { dispatch } = this.props
      dispatch(startGetAllTransactions())
      return <Redirect to={{ pathname: '/home' }} />
    }

    return (
      <SignInWidget
        baseUrl={this.props.baseUrl}
        onSuccess={this.onSuccess}
        onError={this.onError}
      />
    )
  }
}

export default withAuth(connect()(Login))