import React, { Component } from 'react'
import { connect } from 'react-redux'
import Moment from 'moment'
import { extendMoment } from 'moment-range'

import CashTable from './CashTable'

const moment = extendMoment(Moment)

class History extends Component {
  prepareData(transactions) {
    const range = moment.range(new Date(2023, 1, 1), new Date())

    let prepared = {}
    for (let day of range.by('day')) {
      prepared[day.format('Do MMMM YYYY')] = []
    }

    transactions.forEach(tran => {
      prepared[tran.date].push(tran)
    })

    return prepared
  }

  renderTables() {
    let { transactions } = this.props
    transactions = this.prepareData(transactions)

    const range = moment.range(new Date(2023, 1, 1), new Date())
    const dates = Array.from(range.by('day')).reverse()

    return dates.map(day => {
      const date = day.format('Do MMMM YYYY')
      if (transactions[date].length) {
        return (
          <React.Fragment key={date}>
            <br />
            <h1 className='title is-5 has-text-weight-light date-title'>{date}</h1>
            <CashTable transactions={transactions[date]} />
            <br />
          </React.Fragment>
        )
      }
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
    )
  }
}

export default connect(state => {
  return {
    transactions: state.transactions.data
  }
})(History)
