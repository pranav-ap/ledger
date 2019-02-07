import React, { Component } from 'react'
import { connect } from 'react-redux'

import { startDeleteTransaction } from './../actions/transactions-actions'

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

    const handleEdit = (e) => {
      console.log(e)
    }

    const handleSave = (e) => {
      console.log(e)
    }

    let count = 0

    return transactions.map(transaction => {
      count++

      return (
        <tr key={count}>
          <th>{count}</th>
          <td>{transaction.item}</td>
          <td>{transaction.expense}</td>
          <td
            className='row-btn'
            onClick={() => dispatch(startDeleteTransaction(transaction.id))}><i className='far fa-trash-alt delete-btn'/></td>
          <td
            className='row-btn'
            onClick={(e) => handleEdit(e)}><i className='far fa-edit edit-btn'/></td>
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