import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'

import Ledger from './Ledger'
import Login from './Login'

import '../styles/App.scss'

import { checkIfLoggedIn } from './../actions/auth-actions'

class Container extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(checkIfLoggedIn())
  }

  render() {
    return (
      <Switch>
        <Route path='/' render={() => this.props.loggedIn ? <Ledger /> : <Login />} />
        <Redirect to='/' />
      </Switch>
    )
  }
}

export default withRouter(connect((state) => {
  return {
    loggedIn: state.auth.loggedIn
  }
})(Container))