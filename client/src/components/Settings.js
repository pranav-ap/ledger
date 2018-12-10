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

          <hr />

          <div className='field is-horizontal'>
            <div className='field-label'>
              <label className='label is-size-5 has-text-weight-light'>Money in the Bank</label>
            </div>
            <div className='field-body' >
              <div className='field' >
                <p className='control' >
                  <input className='input' type='email' placeholder='' />
                </p>
              </div>
            </div>
          </div>

          <div className='field is-horizontal'>
            <div className='field-label'>
              <label className='label is-size-5 has-text-weight-light'>Subject</label>
            </div>
            <div className='field-body' >
              <div className='field' >
                <p className='control' >
                  <div className='select'>
                    <select>
                      <option>Select dropdown</option>
                      <option>With options</option>
                    </select>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Settings
