import React, { Component } from 'react'
import moment from 'moment'

class QuickInfo extends Component {
  render() {
    console.log(this.props)
    return (
      <nav className='level QuickInfo'>
        <div className='level-item has-text-centered'>
          <div>
            <p className='heading'>Date</p>
            <p className='title custom-title'>{moment().format('Do MMMM YYYY')}</p>
          </div>
        </div>
        <div className='level-item has-text-centered'>
          <div>
            <p className='heading'>Total Expense</p>
            <p className='title custom-title'>Rs. {this.props.totalExpense}</p>
          </div>
        </div>
      </nav>
    )
  }
}

export default QuickInfo
