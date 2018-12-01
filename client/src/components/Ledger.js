import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
import History from './History'
import Settings from './Settings'
import Report from './Report'

import '../styles/App.scss'

import { startGetAllTransactions } from './../actions/transactions-actions'

class Ledger extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(startGetAllTransactions())
  }

  render() {
    return (
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path='/report' component={Report} />
          <Route path='/settings' component={Settings} />
          <Route path='/history' component={History} />
          <Route path='/' component={Home} />
          <Redirect to='/' />
        </Switch>
        <i className='fas fa-spinner fa-spin is-invisible' id='waiting'></i>
      </div>
    )
  }
}

export default withRouter(connect()(Ledger))