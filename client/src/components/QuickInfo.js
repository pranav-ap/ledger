import React, { Component } from 'react'

class QuickInfo extends Component {
  render() {
    return (
      <nav className='level QuickInfo'>
        <div className='level-item has-text-centered'>
          <div>
            <p className='heading'>Date</p>
            <p className='title' onClick={() => this.props.handleSetDate()}>{this.props.date}</p>
          </div>
        </div>
        <div className='level-item has-text-centered'>
          <div>
            <p className='heading'>Total Spending</p>
            <p className='title'>Rs. {this.props.totalSpending}</p>
          </div>
        </div>
      </nav>
    );
  }
}

export default QuickInfo;
