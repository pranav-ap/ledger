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
      'comment': '',
      'transactions': []
    }
  }

  componentWillMount() {
    axios
      .get('/api/transactions')
      .then(result => {
        this.setState({ 'transactions': result.data || [] })
      })
  }

  // must also update transactions table
  setDate() {
    console.log('must implement setDate()')
  }

  addItem(item, cash) {
    this.setState({ 'item': item, 'cash': cash }, () => {
      axios
        .post('/api/transactions', {
          'item': this.state.item,
          'cash': this.state.cash,
          'comment': this.state.comment
        })
        .then(res => {
          this.setState({
            'transactions': {
              ...this.state.transactions,
              res
            }
          })
        })
        .catch(e => {
          console.log(e)
          console.log('unable to add item')
        })
    })
  }

  deleteRow(_id) {
    axios
      .delete(`/api/transactions/${_id}`)
      .then(res => {
        let transactions = [...this.state.transactions]
        let index = transactions.indexOf(res)
        transactions.splice(index, 1);
        this.setState({ 'transactions': transactions });
      })
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
            handleAddItem={this.addItem.bind(this)} />
          <br />
          <CashTable
            transactions={this.state.transactions}
            date={this.state.date}
            handleDeleteRow={this.deleteRow.bind(this)} />
        </div>
      </div>
    );
  }
}

export default Home;
