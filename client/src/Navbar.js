import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

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
            <NavLink to="/home" className="navbar-item">Home</NavLink>
            <NavLink to="/history" className="navbar-item">History</NavLink>
            <NavLink to="/report" className="navbar-item">Report</NavLink>
            <NavLink to="/settings" className="navbar-item">Settings</NavLink>
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
// <a className="navbar-item">Settings</a>

export default Navbar;
