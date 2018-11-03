import React, { Component } from 'react'
import CashTable from './CashTable'


class History extends Component {
  renderTables() {
    let transactions = {}
    transactions = this.props.transactions.reduce((transactions, transaction) => {
      transactions[transaction.date] = transactions[transaction.date] || []
      transactions[transaction.date] = [
        ...transactions[transaction.date],
        transaction
      ]
      return transactions
    }, {})

    return Object.keys(transactions).map(date => {
      return (
        <React.Fragment key={date}>
          <h1 className='title is-5 has-text-weight-light date-title'>{date}</h1>
          <CashTable
            transactions={transactions[date]}
            handleDeleteTransaction={(_id) => this.props.handleDeleteTransaction(_id)} />
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

export default History;
