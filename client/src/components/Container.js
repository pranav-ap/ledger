import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'

import Ledger from './Ledger'
import Login from './Login'

import '../styles/App.scss'

class Container extends Component {
    render() {
        return (
            <Switch>
                <Route path='/ledger' component={Ledger} />
                <Route exact path='/' component={Login} />
                <Redirect to='/' />
            </Switch>
        )
    }
}

export default withRouter(connect()(Container))