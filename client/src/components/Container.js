import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Ledger from './Ledger'
import Login from './Login'

import { checkIfLoggedIn } from './../actions/auth-actions'

import '../styles/App.scss'

class Container extends Component {
    componentDidMount() {
        const { dispatch } = this.props
        dispatch(checkIfLoggedIn())
    }

    render() {
        if (this.props.loggedIn) {
            return <Ledger />
        }

        return <Login />
    }
}

export default withRouter(connect((state) => {
    return {
        loggedIn: state.auth.loggedIn
    }
})(Container))