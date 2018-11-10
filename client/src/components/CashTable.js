import React, { Component } from 'react'
import { connect } from 'react-redux'

import { startDeleteTransaction } from './../actions/transactions-actions'

class CashTable extends Component {
  renderRows() {
    const { transactions, dispatch } = this.props

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
        <tr key={count}>
          <th>{count}</th>
          <td>{transaction.item}</td>
          <td>{transaction.cash}</td>
          <td>{transaction.comment}</td>
          <td onClick={() => dispatch(startDeleteTransaction(transaction._id))}><i className='far fa-trash-alt delete-btn'></i></td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div className='CashTable'>
        <table className='table is-striped is-hoverable is-fullwidth'>
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
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default connect()(CashTable)
