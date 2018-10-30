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
      'transactions': []
    }
  }

  componentWillMount() {
    axios
      .get('/api/transactions')
      .then(res => {
        console.log(res.data)
        this.setState({ 'transactions': res.data || [] })
      })
      .catch(e => {
        console.log(e)
        console.log('unable to get all transactions')
      })
  }

  handleAddTransaction(transaction) {
    this.setState({
      'transactions': {
        ...this.state.transactions,
        transaction
      }
    })
  }

  handleDeleteTransaction(transaction) {
    let transactions = [...this.props.transactions]
    let index = transactions.indexOf(transaction)
    transactions.splice(index, 1);
    this.setState({ 'transactions': transactions });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path='/history' render={() => <History transactions={this.state.transactions} />} />
            <Route path='/report' render={() => <Report transactions={this.state.transactions} />} />
            <Route path='/settings' render={() => <Settings transactions={this.state.transactions} />} />
            <Route exact path='/'
              render={() => <Home
                transactions={this.state.transactions}
                handleAddTransaction={this.handleAddTransaction.bind(this)}
                handleDeleteTransaction={this.handleDeleteTransaction.bind(this)} />} />
            <Redirect to='/' />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
