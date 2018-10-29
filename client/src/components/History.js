import React, { Component } from 'react'
import CashTable from './CashTable'

class History extends Component {
  render() {
    return (
      <div className="columns is-mobile History">
        <div className="column history-column is-8">
          <h1 className='title'>History</h1>
          <p>For each week and month, display the following table</p>
          <br />
          <CashTable />
        </div>
      </div>
    );
  }
}

export default History;
