import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import '../styles/App.scss'
import Navbar from './Navbar'
import Home from './Home'
import History from './History'
import Settings from './Settings'
import Report from './Report'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path='/history' component={History} />
            <Route path='/report' component={Report} />
            <Route path='/settings' component={Settings} />
            <Route exact path='/' component={Home} />
            <Redirect to='/' />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
