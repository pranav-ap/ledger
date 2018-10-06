import React, { Component } from 'react';
import SpendingTable from './SpendingTable'
import QuickInfo from './QuickInfo'
import HomeInput from './HomeInput'

class Home extends Component {
  render() {
    return (
      <div className="columns is-mobile Home">
        <div className="column home-column is-6">
          <QuickInfo />
          <br />
          <HomeInput />
          <br />
          <SpendingTable />
        </div>
      </div>
    );
  }
}

export default Home;
