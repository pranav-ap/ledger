import React, { Component } from 'react'

class Settings extends Component {
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
        </div>
      </div >
    )
  }
}

export default Settings
