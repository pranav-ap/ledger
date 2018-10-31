import React, { Component } from 'react';
import moment from 'moment'
import axios from 'axios'

import CashTable from './CashTable'
import QuickInfo from './QuickInfo'
import HomeInput from './HomeInput'

class Home extends Component {
  constructor(props) {
    super(props)

    let date = moment().format('Do MMMM YYYY')

    this.state = {
      item: '',
      cash: 0,
      date: date,
      comment: ''
    }
  }

  setDate(date) {
    this.setState({ date })
  }

  handleAddTransaction(state) {
    axios
      .post('/api/transactions', {
        item: state.item,
        cash: state.cash,
        date: this.state.date,
        comment: state.comment
      })
      .then(res => this.setState({ ...res.data }, () => this.props.handleAddTransaction(res.data)))
      .catch(e => console.log(e, 'unable to add transaction'))
  }

  getTransactions() {
    let transactions = this.props.transactions.filter(transaction => transaction.date === this.state.date)
    return transactions
  }

  getTotalSpending() {
    let transactions = this.props.transactions.filter(transaction => transaction.date === this.state.date)
    let totalSpending = 0
    totalSpending = transactions.reduce((totalSpending, transaction) => totalSpending + transaction.cash, 0)
    return totalSpending
  }

  render() {
    return (
      <div className="columns is-mobile Home">
        <div className="column home-column is-7">
          <QuickInfo
            date={this.state.date}
            totalSpending={this.getTotalSpending()}
            handleSetDate={(date) => this.setDate(date)} />
          <br />
          <HomeInput handleAddTransaction={(transaction) => this.handleAddTransaction(transaction)} />
          <br />
          <CashTable
            transactions={this.getTransactions()}
            date={this.state.date}
            handleDeleteTransaction={(_id) => this.props.handleDeleteTransaction(_id)} />
        </div>
      </div>
    );
  }
}

export default Home;
