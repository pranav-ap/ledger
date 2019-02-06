import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import CashTable from './CashTable'
import QuickInfo from './QuickInfo'
import HomeInput from './HomeInput'

class Home extends Component {
  getTotalExpense() {
    const { transactions } = this.props
    const today = moment().format('Do MMMM YYYY')
    let total = 0

    if (transactions) {
      transactions.forEach(transaction => {
        total += transaction.date === today ? transaction.expense : 0
      })
    }

    return total
  }

  getTodaysTransactions() {
    const { transactions } = this.props
    const today = moment().format('Do MMMM YYYY')
    let todaysTransactions = transactions.filter(transaction => transaction.date === today)

    return todaysTransactions
  }

  render() {
    return (
      <div className="columns is-mobile Home">
        <div className="column home-column is-7">
          <QuickInfo totalExpense={this.getTotalExpense()} />
          <br />
          <HomeInput />
          <br />
          <CashTable transactions={this.getTodaysTransactions()} />
        </div>
      </div>
    );
  }
}

export default connect(state => {
  return {
    transactions: state.transactions.data
  }
})(Home)
