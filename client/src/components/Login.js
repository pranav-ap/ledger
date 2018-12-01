import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import SignInWidget from './SignInWidget';
import { withRouter } from 'react-router-dom'
import { withAuth } from '@okta/okta-react';
import { compose } from 'recompose'

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: null
    };
    this.checkAuthentication();
  }

  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }

  onSuccess = res => {
    return this.props.auth.redirect({
      sessionToken: res.session.token
    });
  };

  onError = err => {
    console.log('error logging in', err);
  };

  render() {
    if (this.state.authenticated === null) return null;
    return this.state.authenticated ? (
      <Redirect to={{ pathname: '/' }} />
    ) : (
        <SignInWidget
          baseUrl={this.props.baseUrl}
          onSuccess={this.onSuccess}
          onError={this.onError}
        />
      );
  }
}


export default compose(
  withRouter,
  withAuth
)(Login)