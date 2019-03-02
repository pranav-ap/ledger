import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { ResponsiveBar } from '@nivo/bar'
import { Calendar } from '@nivo/calendar'

class Visual extends Component {
  render() {
    const { transactions } = this.props
    let calendarData = transactions.map(t => {
      return {
        day: moment(t.date, 'Do MMMM YYYY').format('YYYY-MM-DD'),
        value: Number(t.expense)
      }
    })

    return (
      <div className='columns is-mobile Visual'>
        <div className='column visual-column is-8'>
          <h1 className='title custom-title'>Day-to-day Heatmap</h1>

          <Calendar
            width={900}
            height={260}
            margin={{
              top: 50,
              right: 10,
              bottom: 10,
              left: 50
            }}
            from="2018-12-31T18:30:00.000Z"
            to="2019-12-30T18:30:00.000Z"
            data={calendarData}
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
})(Visual)
