import React, { Component } from 'react'
import { connect } from 'react-redux'

import Ledger from './Ledger'
import Login from './Login'

import '../styles/App.scss'

class Container extends Component {
    render() {
        if (this.props.loggedIn) {
            return <Ledger />
        }

        return <Login />
    }
}

export default connect((state) => {
    return {
        loggedIn: state.auth.loggedIn
    }
})(Container)