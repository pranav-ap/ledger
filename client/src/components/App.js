import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'

import Navbar from './Navbar'
import Home from './Home'
import History from './History'
import Settings from './Settings'
import Report from './Report'

import '../styles/App.scss'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      transactions: []
    }
  }

  componentWillMount() {
    axios
      .get('/api/transactions')
      .then(res => {
        this.setState({ transactions: res.data || [] })
      })
      .catch(e => {
        console.log(e)
        console.log('unable to get all transactions')
      })
  }

  handleAddTransaction(transaction) {
    this.setState({
      transactions: [
        ...this.state.transactions,
        transaction
      ]
    })
  }

  handleDeleteTransaction(_id) {
    document.getElementById('waiting').classList.toggle('is-invisible')
    axios
      .delete(`/api/transactions/${_id}`)
      .then(() => {
        let transactions = this.state.transactions.filter(t => t._id !== _id)
        this.setState({ transactions });
        document.getElementById('waiting').classList.toggle('is-invisible')
      })
      .catch(e => {
        console.log(e)
        console.log('item could not be deleted')
        document.getElementById('waiting').classList.toggle('is-invisible')
      })
  }

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route path='/report' render={() => <Report transactions={this.state.transactions} />} />
            <Route path='/settings' render={() => <Settings />} />
            <Route path='/history'
              render={() => <History
                transactions={this.state.transactions}
                handleDeleteTransaction={(_id) => this.handleDeleteTransaction(_id)} />} />
            <Route exact path='/'
              render={() => <Home
                transactions={this.state.transactions}
                handleAddTransaction={(transaction) => this.handleAddTransaction(transaction)}
                handleDeleteTransaction={(_id) => this.handleDeleteTransaction(_id)} />} />
            <Redirect to='/' />
          </Switch>
          <i className='fas fa-spinner fa-spin is-invisible' id='waiting'></i>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
