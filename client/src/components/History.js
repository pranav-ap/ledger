import React, { Component } from 'react'
import { connect } from 'react-redux'
// import moment from 'moment'

import CashTable from './CashTable'

class History extends Component {
  renderTables() {
    let { transactions } = this.props

    let transactionsDict = {}
    transactions.forEach(t => {
      transactionsDict[t.date] = transactionsDict[t.date] || []
      transactionsDict[t.date].push(t)
    })

    // .sort((left, right) => moment.utc(right.timeStamp).diff(moment.utc(left.timeStamp)))
    return Object
      .keys(transactionsDict)
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
