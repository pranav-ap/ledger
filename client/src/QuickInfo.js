import React, { Component } from 'react';

class QuickInfo extends Component {
  render() {
    return (
      <nav className="level QuickInfo">
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Date</p>
            <p className="title">3 October 2018</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Total Spending</p>
            <p className="title">Rs. 123</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Plus</p>
            <p className="title">+</p>
          </div>
        </div>
      </nav>
    );
  }
}

export default QuickInfo;
