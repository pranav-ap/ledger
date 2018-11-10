import React, { Component } from 'react'
import CashTable from './CashTable'
import QuickInfo from './QuickInfo'
import HomeInput from './HomeInput'

class Home extends Component {
  getTotalExpense() {
    const { transactions } = this.props
    const today = moment().format('LL')
    let total = 0

    transactions.reduce((total, transaction) => transaction.date == today ? total + transaction.cash : total)

    return total
  }

  getTodaysTransactions() {
    const { transactions } = this.props
    const today = moment().format('LL')
    let todaysTransactions = transactions.map(transaction => transaction.date == today)

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
    transactions: state.transactions
  }
})(Home)
