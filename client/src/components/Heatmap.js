import React, { Component } from 'react'
import { connect } from 'react-redux'
import Moment from 'moment'
import { extendMoment } from 'moment-range'

import { Calendar } from '@nivo/calendar'

const moment = extendMoment(Moment)

class Heatmap extends Component {
  render() {
    const { transactions } = this.props

    const range = moment.range(new Date(2018, 1, 1), new Date())

    let prepared = {}
    for (let day of range.by('day')) {
      prepared[day.format('Do MMMM YYYY')] = 0
    }

    transactions.forEach(tran => {
      if (!isNaN(Number(tran.expense))) {
        prepared[tran.date] += Number(tran.expense)
      }
    })

    let calenderData = []
    Object.entries(prepared).forEach(([date, expense]) => {
      calenderData.push({
        'day': moment(date, 'Do MMMM YYYY').format('YYYY-MM-DD'),
        'value': expense
      })
    })

    return (
      <div className='columns is-mobile Visual'>
        <div className='column visual-column is-8'>
          <h1 className='title custom-title'>Daily Expense Heatmap</h1>
          <Calendar
            width={900}
            height={260}
            margin={{
              top: 50,
              right: 10,
              bottom: 10,
              left: 50
            }}
            emptyColor="#eeeeee"
            colors={[
              '#ffffff',
              "#b0edf2",
              '#44d6d1',
              '#6ad3d8',
              '#00a5ff',
              "#f47560",
              '#e50b0b'
            ]}
            from="2018-12-31T18:30:00.000Z"
            to="2019-12-30T18:30:00.000Z"
            data={calenderData}
          />
        </div>
      </div>
    )
  }
}

export default connect(state => {
  return {
    transactions: state.transactions.data
  }
})(Heatmap)
