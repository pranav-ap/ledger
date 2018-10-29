import React, { Component } from 'react';
import CashTable from './CashTable'
import QuickInfo from './QuickInfo'
import HomeInput from './HomeInput'

class Home extends Component {
  render() {
    return (
      <div className="columns is-mobile Home">
        <div className="column home-column is-7">
          <QuickInfo />
          <br />
          <HomeInput />
          <br />
          <CashTable />
        </div>
      </div>
    );
  }
}

export default Home;
