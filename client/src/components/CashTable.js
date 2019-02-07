import React, { Component } from 'react'
import { connect } from 'react-redux'

import { startUpdateTransaction, startDeleteTransaction } from './../actions/transactions-actions'

class CashTable extends Component {
  renderRows() {
    const { transactions, dispatch } = this.props

    if (transactions.length === 0) {
      return (
        <tr>
          <th/>
          <td className='no-transactions'>No transactions on this day.</td>
          <td/>
          <td/>
          <td/>
        </tr>
      )
    }

    const handleEdit = (transaction) => {
      let row = document.getElementById(transaction.id)

      row.cells[1].contentEditable = !row.cells[1].contentEditable
      row.cells[2].contentEditable = !row.cells[2].contentEditable

      if (row.cells[1].contentEditable === false) {
        transaction = {
          ...transaction,
          item: row.cells[1].innerText,
          expense: row.cells[2].innerText
        }

        dispatch(startUpdateTransaction(transaction.id, transaction))
      }

      if (row.cells[1].contentEditable === true) {
        row.cells[1].focus()
      }
    }

    let count = 0

    return transactions.map(transaction => {
      count++

      return (
        <tr key={count} id={transaction.id}>
          <th>{count}</th>
          <td contentEditable={false}>{transaction.item}</td>
          <td contentEditable={false}>{transaction.expense}</td>
          <td
            className='row-btn'
            onClick={() => dispatch(startDeleteTransaction(transaction.id))}><i className='far fa-trash-alt delete-btn'/></td>
          <td
            className='row-btn'
            onClick={() => handleEdit(transaction)}><i className='far fa-edit edit-btn'/></td>
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
            <th>&nbsp;</th>
            <th>&nbsp;</th>
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