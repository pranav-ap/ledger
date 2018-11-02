import React, { Component } from 'react'
import { Chart } from 'frappe-charts/dist/frappe-charts.esm'
import Moment from 'moment'
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment)

class Report extends Component {
  componentDidMount() {
    const start = new Date(2018, 1, 2);
    const end = new Date(2025, 3, 6);
    const range = moment.range(start, end);

    const getData = () => {
      let unix = {}

      for (let day of range.by('day')) {
        let d = day.format('YYYY-MM-DD').valueOf().toString()
        unix[d] = Math.floor(Math.random() * 37)
      }

      return unix
    }

    let data = {
      dataPoints: getData(),
      start: start,
      end: end
    }

    let chart = new Chart('#heatmap', {
      type: 'heatmap',
      data: data
    })

    // hacky way to fix the problem with the tooltip
    document.getElementsByClassName('comparison')[0].remove()
  }

  render() {
    return (
      <div className='columns is-mobile Report'>
        <div className='column report-column is-8'>
          <h1 className='title'>Report</h1>
          <div id='heatmap'></div>
        </div>
      </div>
    );
  }
}

export default Report;

    // <h1 className='title'>Report</h1>