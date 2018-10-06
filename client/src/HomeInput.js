import React, { Component } from 'react';

class HomeInput extends Component {
  render() {
    return (
      <div className="HomeInput">
        <div className="field">
          <div className="control">
            <input className="input is-medium" type="text" placeholder="What did you buy?" />
          </div>
        </div>
        <div className="field is-pulled-right">
          <label for="plus-or-minus">Income&nbsp;&nbsp;</label>
          <input id="plus-or-minus" type="checkbox" name="plus-or-minus" className="switch is-rounded" checked="checked" />
          <label for="plus-or-minus">Expenditure&nbsp;</label>
        </div>
      </div>
    );
  }
}

export default HomeInput;
