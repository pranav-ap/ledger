import React from 'react'
import moment from 'moment'

function QuickInfo({ totalExpense }) {
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
          <p className='title custom-title'>{totalExpense} Euro</p>
        </div>
      </div>
    </nav>
  )
}

export default QuickInfo
