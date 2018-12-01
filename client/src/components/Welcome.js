import React, { Component } from 'react'
import { withAuth } from '@okta/okta-react'
import { Link } from 'react-router-dom'

// import Ledger from './Ledger'

export default withAuth(
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
      if (this.state.authenticated === null) return null;

      const mainContent = this.state.authenticated ? (
        <div>
          <p className="lead">
            You have entered the staff portal,{' '}
            <Link to="/ledger">click here</Link>
          </p>
          <button className="btn btn-light btn-lg" onClick={this.logout}>
            Logout
          </button>
        </div>
      ) : (
          <div>
            <p className="lead">
              If you are a staff member, please get your credentials from your
              supervisor
          </p>
            <button className="btn btn-dark btn-lg" onClick={this.login}>
              Login
          </button>
          </div>
        );

      return (
        <div className="jumbotron">
          {mainContent}
        </div>
      );
    }
  }
)
