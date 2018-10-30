import React, { Component } from 'react'

class CashTable extends Component {
  renderRow() {
    let transactions = this.props.transactions.filter(transaction => transaction.date === this.props.date)

    if (transactions.length === 0) {
      return (
        <tr>
          <th></th>
          <td>No transactions on this day.</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      )
    }

    let count = 0

    return transactions.map(transaction => {
      count++

      return (
        <tr key={transaction._id}>
          <th>{count}</th>
          <td>{transaction.item}</td>
          <td>{transaction.cash}</td>
          <td>{transaction.comment}</td>
          <td onClick={() => this.handleDeleteRow(transaction._id)}><i className="far fa-trash-alt delete-btn"></i></td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div className="TransactionsTable">
        <table className="table is-striped is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Item</th>
              <th>Cash</th>
              <th>Comments</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.renderRow()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CashTable;

