import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { startLogout } from './../actions/auth-actions'

class Navbar extends Component {
  componentDidMount() {
    let [burgerElement] = document.getElementsByClassName('navbar-burger')
    let [menuElement] = document.getElementsByClassName('navbar-menu')

    burgerElement.addEventListener('click', () => {
      burgerElement.classList.toggle('is-active')
      menuElement.classList.toggle('is-active')
    })
  }

  handleLogout() {
    const { dispatch } = this.props
    dispatch(startLogout())
  }

  render() {
    return (
      <nav className='navbar is-warning navbar-custom' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <a className='navbar-item custom-icon'><i className='fas fa-money-check-alt'></i>&nbsp;&nbsp;Ledger&nbsp;&nbsp;</a>

          <a role='button' className='navbar-burger' aria-label='menu' aria-expanded='false'>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>

        <div id='navbar-menu-custom' className='navbar-menu has-background-warning is-shadowless'>
          <div className='navbar-start'>
            <NavLink to='/' className='navbar-item'>Home</NavLink>
            <NavLink to='/history' className='navbar-item'>History</NavLink>
            <NavLink to='/report' className='navbar-item'>Report</NavLink>
            <NavLink to='/settings' className='navbar-item'>Settings</NavLink>
          </div>
          <div className='navbar-end'>
            <div className='navbar-item'>
              <div className='buttons'>
                <a className='button is-primary is-rounded' onClick={() => this.handleLogout()}>Logout</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(connect()(Navbar))
