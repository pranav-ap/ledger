import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateTransaction, deleteTransaction } from './../app state/tranSlice'

class CashTable extends Component {
  renderRows() {
    const { transactions, dispatch } = this.props

    if (transactions.length === 0) {
      return (
        <tr>
          <th className={'count'} />
          <td className={'item no-transactions'}>No transactions on this day.</td>
          <td className={'expense'} />
          <td className={'del-column'} />
          <td className={'edit-column'} />
        </tr>
      )
    }

    const handleEdit = (transaction) => {
      let row = document.getElementById(transaction.id)
      let editable = !(row.cells[1].contentEditable === 'true')

      row.cells[1].contentEditable = row.cells[2].contentEditable = editable

      if (!editable) {
        let updatedData = {
          ...transaction,
          item: row.cells[1].innerText,
          expense: row.cells[2].innerText
        }

        dispatch(updateTransaction({ id: transaction.id, updatedData }))
      }

      if (editable) {
        row.cells[1].focus()
      }
    }

    let count = 0

    return transactions.map(transaction => {
      count++

      return (
        <tr key={count} id={transaction.id}>
          <th className={'count'}>{count}</th>
          <td className={'item'} contentEditable={false}>{transaction.item}</td>
          <td className={'expense'} contentEditable={false}>{transaction.expense}</td>
          <td
            className='row-btn del-column'
            onClick={() => dispatch(deleteTransaction(transaction.id))}><i className='far fa-trash-alt delete-btn' /></td>
          <td
            className='row-btn edit-column'
            onClick={() => handleEdit(transaction)}><i className='far fa-edit edit-btn' /></td>
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

