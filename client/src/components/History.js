import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import CashTable from './CashTable'

class History extends Component {
  renderTables() {
    let { transactions } = this.props

    let transactionsDict = {}
    transactions.forEach(t => {
      transactionsDict[t.date] = transactionsDict[t.date] || []
      transactionsDict[t.date].push(t)
    })

    return Object
      .keys(transactionsDict)
      .sort((left, right) => {
        if (moment(left, 'Do MMMM YYYY').isBefore(moment(right, 'Do MMMM YYYY'))) {
          return 1
        } else if (moment(left, 'Do MMMM YYYY').isAfter(moment(right, 'Do MMMM YYYY'))) {
          return -1
        } else {
          return 0
        }
      })
      .map(date => {
        return (
          <React.Fragment key={date}>
            <br />
            <h1 className='title is-5 has-text-weight-light date-title'>{date}</h1>
            <CashTable transactions={transactionsDict[date]} />
            <br />
          </React.Fragment>
        )
      })
  }

  render() {
    return (
      <div className='columns is-mobile History'>
        <div className='column history-column is-8'>
          <h1 className='title custom-title'>History</h1>
          {this.renderTables()}
        </div>
      </div>
    );
  }
}

export default connect(state => {
  return {
    transactions: state.transactions.data
  }
})(History)
