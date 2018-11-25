import React, { Component } from 'react'
import { connect } from 'react-redux'

import '../styles/App.scss'

import { startLogin } from './../actions/auth-actions'

class Login extends Component {
    handleLogin() {
        const { dispatch } = this.props
        dispatch(startLogin(this.refs.password.value))
    }

    render() {
        return (
            <div className='Login'>
                <h1>Login</h1>
                <input type="password" className="form-control" id="password" ref="password" placeholder="Password" />
                <a className='button is-primary' onClick={() => this.handleLogin()}>Login</a>
            </div>
        )
    }
}

export default connect()(Login)