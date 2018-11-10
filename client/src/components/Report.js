import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Chart } from 'frappe-charts/dist/frappe-charts.esm'
import Moment from 'moment'
import { extendMoment } from 'moment-range'

const moment = extendMoment(Moment)

class Report extends Component {
  getTotalExpense(date) {
    const { transactions } = this.props
    let total = 0

    console.log(transactions)

    for (let transaction of transactions) {
      if (transaction.date === date) {
        total += transaction.cash
      }
    }

    return total
  }

  getDataPoints(start, end) {
    let timestamps = {}
    const range = moment.range(start, end);

    for (let day of range.by('day')) {
      let date = day.format('Do MMMM YYYY').toString()
      timestamps[date] = this.getTotalExpense(date)
    }

    return timestamps
  }

  componentDidMount() {
    // const start = moment(this.props.startDate, 'Dd MMMM YYYY')
    const start = moment().subtract(7, 'months')
    const end = moment().add(3, 'months')

    let data = {
      dataPoints: this.getDataPoints(start.format('YYYY-MM-DD'), end.format('YYYY-MM-DD')),
      start: start.toDate(),
      end: end.toDate()
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
    )
  }
}

export default connect(state => {
  return {
    transactions: state.transactions.data,
    startDate: state.user.startDate
  }
})(Report)
