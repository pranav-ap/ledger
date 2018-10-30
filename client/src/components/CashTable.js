import React, { Component } from 'react'

class CashTable extends Component {
  renderRow() {
    if (this.props.transactions.length === 0) {
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

    return this.props.transactions.map(transaction => {
      count++

      return (
        <tr key={transaction._id}>
          <th>{count}</th>
          <td>{transaction.item}</td>
          <td>{transaction.cash}</td>
          <td>{transaction.comment}</td>
          <td onClick={() => this.props.handleDeleteTransaction(transaction._id)}><i className="far fa-trash-alt delete-btn"></i></td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div className="CashTable">
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
