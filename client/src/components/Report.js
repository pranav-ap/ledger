import React, { Component } from 'react'
import { Chart } from 'frappe-charts/dist/frappe-charts.esm'
import Moment from 'moment'
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment)

class Report extends Component {
  componentDidMount() {
    const start = new Date(2018, 11, 2);
    const end = moment().toDate()

    const getData = () => {
      let timestamps = {}

      for (let day of moment.range(start, end).by('day')) {
        let d = day.format('YYYY-MM-DD').valueOf().toString()
        timestamps[d] = Math.floor(Math.random() * 37)
      }

      return timestamps
    }

    let data = {
      dataPoints: getData(),
      start,
      end: moment().add(5, 'months').toDate()
    }

    let chart = new Chart('#SpendingHeatmap', {
      type: 'heatmap',
      data
    })

    chart = new Chart('#IncomeHeatmap', {
      type: 'heatmap',
      data
    })

    // hacky way to fix the problem with the tooltip
    document.getElementsByClassName('comparison')[0].remove()
    document.getElementsByClassName('comparison')[0].remove()
  }

  render() {
    return (
      <div className='columns is-mobile Report'>
        <div className='column report-column is-8'>
          <h1 className='title custom-title'>Financial Report</h1>
          <br />
          <nav className='level'>
            <div className='level-item has-text-centered'>
              <div>
                <p className='heading'>Money in the bank</p>
                <p className='title custom-title'>1, 00, 000</p>
              </div>
            </div>
            <div className='level-item has-text-centered'>
              <div>
                <p className='heading'>Average Income</p>
                <p className='title custom-title'>32, 000</p>
              </div>
            </div>
          </nav>
          <br />
          <h1 className='is-size-5 has-text-weight-light'>Spending Heatmap</h1>
          <div id='SpendingHeatmap'></div>
          <br />
          <h1 className='is-size-5 has-text-weight-light'>Income Heatmap</h1>
          <div id='IncomeHeatmap'></div>
        </div>
      </div>
    );
  }
}

export default Report;
