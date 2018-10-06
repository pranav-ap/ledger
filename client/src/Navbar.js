import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar is-warning navbar-custom" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io"><img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" /></a>

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbar-menu-custom" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">Home</a>
            <a className="navbar-item">History</a>
            <a className="navbar-item">Report</a>
            <a className="navbar-item">Settings</a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary is-rounded">Logout</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
