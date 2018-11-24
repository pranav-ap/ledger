import React, { Component } from 'react'
import { GoogleLogin } from 'react-google-login'

class Settings extends Component {
  responseGoogle = (response) => {
    console.log(response);
  }

  render() {
    return (
      <div className='columns is-mobile Settings'>
        <div className='column settings-column is-8'>
          <h1 className='title custom-title'>Settings</h1>
          <h1 className='title custom-title is-size-5 has-text-weight-light'>The categories available are</h1>
          <div className='tags'>
            <span className='tag is-danger is-medium'>Food that kills you</span>
            <span className='tag is-success is-medium'>Healthy Food</span>
            <span className='tag is-primary is-medium'>Books</span>
            <span className='tag is-warning is-medium'>Travel</span>
            <span className='tag is-dark is-medium'>Misc</span>
          </div>
          <GoogleLogin
            clientId="419989489957-9cqbsjqis6f62r8ahed6cuer670j4606.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={() => this.responseGoogle()}
            onFailure={() => this.responseGoogle()}
          />
        </div>
      </div >
    )
  }
}

export default Settings
