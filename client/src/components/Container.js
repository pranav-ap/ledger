import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react'

import Login from './Login'
import Welcome from './Welcome'
import Home from './Home'
import History from './History'

import '../styles/App.scss'

function onAuthRequired({ history }) {
  history.push('/login')
}
//zANsxA4kgZbx6S5

class Container extends Component {
  render() {
    return (
      <Security
        issuer="https://dev-654158.oktapreview.com/oauth2/default"
        client_id="0oahyyfujmLohEuhq0h7"
        redirect_uri={window.location.origin + '/implicit/callback'}
        onAuthRequired={onAuthRequired}
      >
        <Route path="/" exact={true} component={Welcome} />
        <SecureRoute path="/home" exact={true} component={Home} />
        <SecureRoute path="/history" exact={true} component={History} />
        <Route
          path="/login"
          render={() => (
            <Login baseUrl="https://dev-654158.oktapreview.com" />
          )}
        />
        <Route path="/implicit/callback" component={ImplicitCallback} />
      </Security>
    )
  }
}

export default withRouter(Container)