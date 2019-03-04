import React, {Component} from 'react'
import {connect} from 'react-redux'

class Settings extends Component {
  render() {
    return (
      <div className="columns is-mobile Settings">
        <div className="column settings-column is-8">
          <h1 className='title custom-title'>Settings</h1>
        </div>
      </div>
    );
  }
}

export default connect()(Settings)
