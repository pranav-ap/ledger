import React, { Component } from 'react';

class HomeInput extends Component {
  render() {
    return (
      <div className='HomeInput'>
        <div className='field'>
          <div className='control'>
            <input className="input is-rounded is-large custom-input" type="text" placeholder="What did you buy ?" />
          </div>
        </div>
        <div id='Subtext'>
          <span className="tag is-danger">Cancel</span>
        </div>
      </div>
    );
  }
}

export default HomeInput;
