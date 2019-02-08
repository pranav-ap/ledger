import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
import History from './History'
import Visual from './Visual'

import '../styles/App.scss'

import { startGetAllTransactions } from './../actions/transactions-actions'

class Container extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(startGetAllTransactions())
  }

  render() {
    return (
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path='/visual' component={Visual} />
          <Route path='/history' component={History} />
          <Route path='/' component={Home} />
          <Redirect to='/' />
        </Switch>
      </div>
    )
  }
}

export default withRouter(connect()(Container))