import React, { Component, Fragment } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react'

import Login from './Login'
import RegistrationForm from './RegistrationForm'
import Welcome from './Welcome'
import Navbar from './Navbar'
import Home from './Home'
import History from './History'
import Report from './Report'
import Settings from './Settings'

import '../styles/App.scss'

function onAuthRequired({ history }) {
  history.push('/login')
}

class Container extends Component {
  render() {
    return (
      <div className='App'>
        <Security
          issuer="https://dev-654158.oktapreview.com/oauth2/default"
          client_id='0oahyyfujmLohEuhq0h7'
          redirect_uri={window.location.origin + '/implicit/callback'}
          onAuthRequired={onAuthRequired}
        >
          <Route path="/" exact={true} component={Welcome} />
          <Route path="/implicit/callback" component={ImplicitCallback} />
          <Route path="/register" exact={true} component={RegistrationForm} />
          <Route path="/login" exact={true}
            render={() => (
              <Login baseUrl="https://dev-654158.oktapreview.com" />
            )}
          />
          <SecureRoute path="/home" exact={true}
            render={() => (
              <Fragment>
                <Navbar />
                <Home />
              </Fragment>
            )}
          />
          <SecureRoute path="/history" exact={true}
            render={() => (
              <Fragment>
                <Navbar />
                <History />
              </Fragment>
            )}
          />
          <SecureRoute path="/report" exact={true}
            render={() => (
              <Fragment>
                <Navbar />
                <Report />
              </Fragment>
            )}
          />
          <SecureRoute path="/settings" exact={true}
            render={() => (
              <Fragment>
                <Navbar />
                <Settings />
              </Fragment>
            )}
          />
        </Security>
      </div>
    )
  }
}

export default withRouter(Container)