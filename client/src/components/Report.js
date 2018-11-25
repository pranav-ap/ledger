import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Chart } from 'frappe-charts/dist/frappe-charts.esm'
import Moment from 'moment'
import { extendMoment } from 'moment-range'

const moment = extendMoment(Moment)

class Report extends Component {
  getTotalIncome(date) {
    const { transactions } = this.props
    let total = 0

    for (let transaction of transactions) {
      if (transaction.date === date) {
        total += transaction.income
      }
    }

    return total
  }

  getIncomeDataPoints(start, end) {
    let timestamps = {}
    const range = moment.range(start, end)

    for (let day of range.by('day')) {
      let date = day.format('Do MMMM YYYY').toString()
      timestamps[day.unix()] = this.getTotalIncome(date)
    }

    return timestamps
  }

  getTotalExpense(date) {
    const { transactions } = this.props
    let total = 0

    for (let transaction of transactions) {
      if (transaction.date === date) {
        total += transaction.expense
      }
    }

    return total
  }

  getExpenseDataPoints(start, end) {
    let timestamps = {}
    const range = moment.range(start, end)

    for (let day of range.by('day')) {
      let date = day.format('Do MMMM YYYY').toString()
      timestamps[day.unix()] = this.getTotalExpense(date)
    }

    return timestamps
  }

  setHeatmaps() {
    // const start = moment(this.props.startDate, 'Dd MMMM YYYY')
    const start = moment().subtract(1, 'months')
    const end = moment().add(3, 'months')

    let data = {
      dataPoints: this.getExpenseDataPoints(start.format('YYYY-MM-DD'), end.format('YYYY-MM-DD')),
      start: start.toDate(),
      end: end.toDate()
    }

    // eslint-disable-next-line
    let chart = new Chart('#ExpenseHeatmap', {
      type: 'heatmap',
      data,
      colors: ['#ebedf0', '#c0ddf9', '#73b3f3', '#3886e1', '#17459e']
    })

    data = {
      dataPoints: this.getIncomeDataPoints(start.format('YYYY-MM-DD'), end.format('YYYY-MM-DD')),
      start: start.toDate(),
      end: end.toDate()
    }

    chart = new Chart('#IncomeHeatmap', {
      type: 'heatmap',
      data
    })

    // hacky way to fix the problem with the tooltip
    document.getElementsByClassName('comparison')[0].remove()
    document.getElementsByClassName('comparison')[0].remove()
  }

  componentDidMount() {
    this.setHeatmaps()
  }

  componentDidUpdate() {
    this.setHeatmaps()
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
          <div id='ExpenseHeatmap'></div>
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
    startDate: state.auth.startDate
  }
})(Report)
