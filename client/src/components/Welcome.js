import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { withAuth } from '@okta/okta-react'
import { Link } from 'react-router-dom'
import { compose } from 'recompose'

import Ledger from './Ledger'

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
      return <Ledger />

    return (
      <div>
        <p className="lead">
          Welcome
          </p>
        <button className="btn btn-dark btn-lg" onClick={this.login}>
          Login
          </button>
      </div>
    )
  }
}

export default compose(
  withRouter,
  withAuth
)(Welcome)