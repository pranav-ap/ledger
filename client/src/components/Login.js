import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import SignInWidget from './SignInWidget'
import { withAuth } from '@okta/okta-react'
import { compose } from 'recompose'

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

  render() {
    return this.state.authenticated ? (
      <Redirect to={{ pathname: '/home' }} />
    ) : (
        <SignInWidget
          baseUrl={this.props.baseUrl}
          onSuccess={this.onSuccess}
          onError={this.onError}
        />
      )
  }
}

export default compose(
  withAuth
)(Login)