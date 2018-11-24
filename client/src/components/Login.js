import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GoogleLogin } from 'react-google-login'

import '../styles/App.scss'

class Login extends Component {
    responseGoogle(res) {
        console.log(res)
        console.log('--------------------')
        console.log(res.tokenObj.id_token)
    }

    render() {
        return (
            <div className='Login'>
                <h1>Login</h1>
                <GoogleLogin
                    clientId='419989489957-9cqbsjqis6f62r8ahed6cuer670j4606.apps.googleusercontent.com'
                    buttonText='Login with Google'
                    uxMode='redirect'
                    onSuccess={(res) => this.responseGoogle(res)}
                    onFailure={(res) => this.responseGoogle(res)}
                />
            </div>
        )
    }
}

export default connect()(Login)