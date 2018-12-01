import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, withRouter, BrowserRouter as Router } from 'react-router-dom'
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react'

import Ledger from './Ledger'
import Login from './Login'
import Welcome from './Welcome'

import '../styles/App.scss'

function onAuthRequired({ history }) {
  history.push('/login')
}
//zANsxA4kgZbx6S5

class Container extends Component {
  render() {
    return (
      <Router>
        <Security
          issuer="https://dev-654158.oktapreview.com/oauth2/default"
          client_id="0oahyyfujmLohEuhq0h7"
          redirect_uri={window.location.origin + '/implicit/callback'}
          onAuthRequired={onAuthRequired}
        >
          <div className="App">
            <div className="container">
              <Route path="/" exact={true} component={Welcome} />
              <SecureRoute path="/ledger" exact={true} component={Ledger} />
              <Route
                path="/login"
                render={() => (
                  <Login baseUrl="https://dev-654158.oktapreview.com" />
                )}
              />
              <Route path="/implicit/callback" component={ImplicitCallback} />
            </div>
          </div>
        </Security>
      </Router>
    )
  }
}

export default withRouter(connect()(Container))