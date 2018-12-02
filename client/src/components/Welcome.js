import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { withAuth } from '@okta/okta-react'
import { compose } from 'recompose'

class Welcome extends Component {
  constructor(props) {
    super(props)
    this.state = { authenticated: false }
  }

  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated()
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated })
    }
  }

  async componentDidMount() {
    this.checkAuthentication()
  }

  async componentDidUpdate() {
    this.checkAuthentication()
  }

  login = async () => {
    this.props.auth.login('/')
  }

  logout = async () => {
    this.props.auth.logout('/')
  }

  render() {
    if (this.state.authenticated)
      return <Redirect to={{ pathname: '/home' }} />

    return (
      <div>
        <p className="lead">
          Welcome
          </p>
        <button onClick={this.login}>
          Login
          </button>
      </div>
    )
  }
}

export default compose(
  withAuth
)(Welcome)