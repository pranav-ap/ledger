import React, { Component } from 'react'
import CashTable from './CashTable'
// sorts transactions and groups them into weeks
// calls cashtable for each
class History extends Component {
  renderTable() {
    let transactions = {}
    transactions = this.props.transactions.reduce((transactions, transaction) => {
      transactions[transaction.date] = transaction
      return transactions
    }, {})

    return Object.keys(transactions).forEach(date => {
      return (
        <CashTable
          transactions={transactions[date]}
          handleDeleteTransaction={(_id) => this.props.handleDeleteTransaction(_id)} />
      )
    })
  }

  render() {
    return (
      <div className="columns is-mobile History">
        <div className="column history-column is-8">
          <h1 className='title'>History</h1>
          <p>For each week and month, display the following table</p>
          <br />

        </div>
      </div>
    );
  }
}

export default History;
