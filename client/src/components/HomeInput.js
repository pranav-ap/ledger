import React, { Component } from 'react';

class HomeInput extends Component {
  render() {
    return (
      <div className='HomeInput'>
        <div className='field'>
          <div className='control'>
            <input className='input is-medium' type='text' placeholder='Enter command' />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeInput;


// <div className='column'>
//   <div className='field is-pulled-right'>
//     <label htmlFor='plus-or-minus'>Income&nbsp;&nbsp;</label>
//     <input id='plus-or-minus' type='checkbox' name='plus-or-minus' className='switch is-rounded' checked='checked' />
//     <label htmlFor='plus-or-minus'>Expenditure&nbsp;</label>
//   </div>
// </div>