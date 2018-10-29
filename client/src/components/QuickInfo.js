import React, { Component } from 'react'
import moment from 'moment'

class QuickInfo extends Component {
  render() {
    return (
      <nav className="level QuickInfo">
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Date</p>
            <p className="title">{moment().format('Do MMMM YYYY')}</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Total Spending</p>
            <p className="title">Rs. 123</p>
          </div>
        </div>
      </nav>
    );
  }
}

export default QuickInfo;
