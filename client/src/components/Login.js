import React, { Component } from 'react'
import { connect } from 'react-redux'

import '../styles/App.scss'

class Login extends Component {
    render() {
        return (
            <div className='Login'>
                <h1>Login</h1>
                <a className='button is-primary' href='/api/auth/google'>Login</a>
            </div>
        )
    }
}

export default connect()(Login)