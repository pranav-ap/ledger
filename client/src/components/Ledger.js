import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'

import App from './App'
import Welcome from './Welcome'

import { checkIfLoggedIn } from './../actions/user-actions'

export class Ledger extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(checkIfLoggedIn())
  }

  render() {
    const { loggedIn } = this.props

    return (
      <Switch>
        <Route path='/app' component={App} />
        <Route path='/' component={Welcome} />
        <Redirect to='/' />
      </Switch>
    )
  }
}

export default withRouter(connect(state => {
  return {
    loggedIn: state.user.loggedIn
  }
})(Ledger))

