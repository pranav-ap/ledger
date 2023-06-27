import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  componentDidMount() {
    let [burgerElement] = document.getElementsByClassName('navbar-burger')
    let [menuElement] = document.getElementsByClassName('navbar-menu')

    burgerElement.addEventListener('click', () => {
      burgerElement.classList.toggle('is-active')
      menuElement.classList.toggle('is-active')
    })
  }

  render() {
    return (
      <nav className='navbar is-warning navbar-custom' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <a href="/#" className='navbar-item custom-icon'><i className='fas fa-money-check-alt' />&nbsp;&nbsp;Ledger&nbsp;&nbsp;</a>

          <a href="/#" role='button' className='navbar-burger' aria-label='menu' aria-expanded='false'>
            <span aria-hidden='true' />
            <span aria-hidden='true' />
            <span aria-hidden='true' />
          </a>
        </div>

        <div id='navbar-menu-custom' className='navbar-menu has-background-warning is-shadowless'>
          <div className='navbar-start'>
            <Link to='/' className='navbar-item'>Home</Link>
            <Link to='/history' className='navbar-item'>History</Link>
            <Link to='/heatmap' className='navbar-item'>Heatmap</Link>
          </div>
          <div className="navbar-end">
            <Link to='/settings' className='navbar-item'>Settings</Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
