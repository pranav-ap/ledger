import React, { Component } from 'react';

class HomeInput extends Component {
  render() {
    return (
      <div className='HomeInput'>
        <div className='field'>
          <div className='control'>
            <input className='input is-medium custom-input' type='text' placeholder='Enter Command' autoFocus />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeInput;
