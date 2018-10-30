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
      'item': '',
      'cash': 0,
      'date': date,
      'comment': ''
    }
  }

  setDate() {
    console.log('must implement setDate()')
  }

  addTransaction(item, cash) {
    this.setState({ 'item': item, 'cash': cash }, () => {
      axios
        .post('/api/transactions', {
          'item': this.state.item,
          'cash': this.state.cash,
          'comment': this.state.comment
        })
        .then(res => this.props.handleAddTransaction(res))
        .catch(e => {
          console.log(e)
          console.log('unable to add item')
        })
    })
  }

  deleteRow(_id) {
    axios
      .delete(`/api/transactions/${_id}`)
      .then(res => this.handleDeleteTransaction(res))
      .catch(e => {
        console.log(e)
        console.log('item could not be deleted')
      })
  }

  render() {
    return (
      <div className="columns is-mobile Home">
        <div className="column home-column is-7">
          <QuickInfo
            date={this.state.date}
            handleSetDate={this.setDate.bind(this)} />
          <br />
          <HomeInput
            handleAddTransaction={this.addTransaction.bind(this)} />
          <br />
          <CashTable
            transactions={this.props.transactions}
            date={this.state.date}
            handleDeleteRow={this.deleteRow.bind(this)} />
        </div>
      </div>
    );
  }
}

export default Home;
