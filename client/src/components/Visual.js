import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ResponsiveBar } from '@nivo/bar'
import { Calendar } from '@nivo/calendar'

class Visual extends Component {
  render() {
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
            data={[
              {day: '2019-06-02',value: 118},
              {day: '2019-10-26',value: 367},
              {day: '2019-04-04',value: 342},
              {day: '2019-11-04',value: 23},
              {day: '2019-04-06',value: 261},
              {day: '2019-12-27',value: 298},
              {day: '2019-08-18',value: 379},
              {day: '2019-02-08',value: 141},
              {day: '2019-02-10',value: 134},
              {day: '2019-06-29',value: 345},
              {day: '2019-10-10',value: 323},
              {day: '2019-09-09',value: 115},
              {day: '2019-10-15',value: 87},
              {day: '2019-02-22',value: 289},
              {day: '2019-05-06',value: 102},
              {day: '2019-06-27',value: 349},
              {day: '2019-08-02',value: 22},
              {day: '2019-07-25',value: 145},
              {day: '2019-06-30',value: 152},
              {day: '2019-04-20',value: 300},
              {day: '2019-05-20',value: 293},
              {day: '2019-08-20',value: 383},
              {day: '2019-12-02',value: 363},
              {day: '2019-03-19',value: 281},
              {day: '2019-02-18',value: 301},
              {day: '2019-09-16',value: 175},
              {day: '2019-06-26',value: 242},
              {day: '2019-03-09',value: 353},
              {day: '2019-04-23',value: 24},
              {day: '2019-09-02',value: 22},
              {day: '2019-01-04',value: 370},
              {day: '2019-11-11',value: 17},
              {day: '2019-03-28',value: 156},
              {day: '2019-01-25',value: 131},
              {day: '2019-11-18',value: 337},
              {day: '2019-12-04',value: 18},
              {day: '2019-02-20',value: 361},
              {day: '2019-11-19',value: 219},
              {day: '2019-05-25',value: 64},
              {day: '2019-01-16',value: 210},
              {day: '2019-08-04',value: 354},
              {day: '2019-11-10',value: 75},
              {day: '2019-01-20',value: 251},
              {day: '2019-12-07',value: 6},
              {day: '2019-08-30',value: 130},
              {day: '2019-08-11',value: 152},
              {day: '2019-11-12',value: 215},
              {day: '2019-12-21',value: 168},
              {day: '2019-09-01',value: 82},
              {day: '2019-07-11',value: 103},
              {day: '2019-04-16',value: 169},
              {day: '2019-02-09',value: 350},
              {day: '2019-03-17',value: 10},
              {day: '2019-05-15',value: 399},
              {day: '2019-07-30',value: 322},
              {day: '2019-08-08',value: 367},
              {day: '2019-04-21',value: 200},
              {day: '2019-10-25',value: 392},
              {day: '2019-03-10',value: 324},
              {day: '2019-05-27',value: 197},
              {day: '2019-02-06',value: 317},
              {day: '2019-05-08',value: 241},
              {day: '2019-06-12',value: 70},
              {day: '2019-06-07',value: 236},
              {day: '2019-05-16',value: 394},
              {day: '2019-05-04',value: 90},
              {day: '2019-02-19',value: 131},
              {day: '2019-11-15',value: 309},
              {day: '2019-03-24',value: 183},
              {day: '2019-03-16',value: 207},
              {day: '2019-06-23',value: 333},
              {day: '2019-04-13',value: 212},
              {day: '2019-01-08',value: 268},
              {day: '2019-02-07',value: 339},
              {day: '2019-05-09',value: 181},
              {day: '2019-04-30',value: 189},
              {day: '2019-09-27',value: 54},
              {day: '2019-03-01',value: 108},
              {day: '2019-11-02',value: 81},
              {day: '2019-04-11',value: 138},
              {day: '2019-05-24',value: 159},
              {day: '2019-12-17',value: 379},
              {day: '2019-12-14',value: 217},
              {day: '2019-10-24',value: 274},
              {day: '2019-01-31',value: 322},
              {day: '2019-07-03',value: 361},
              {day: '2019-05-22',value: 358},
              {day: '2019-05-18',value: 50},
              {day: '2019-11-13',value: 209},
              {day: '2019-04-07',value: 359},
              {day: '2019-08-22',value: 98},
              {day: '2019-12-08',value: 59},
              {day: '2019-09-07',value: 226},
              {day: '2019-10-27',value: 194},
              {day: '2019-01-05',value: 206},
              {day: '2019-03-06',value: 333},
              {day: '2019-09-14',value: 130},
              {day: '2019-04-02',value: 54},
              {day: '2019-10-05',value: 58},
              {day: '2019-01-13',value: 176},
              {day: '2019-09-29',value: 127},
              {day: '2019-05-21',value: 120},
              {day: '2019-02-16',value: 330},
              {day: '2019-07-23',value: 242},
              {day: '2019-06-17',value: 91},
              {day: '2019-07-19',value: 396},
              {day: '2019-01-24',value: 74},
              {day: '2019-10-21',value: 372},
              {day: '2019-05-11',value: 313},
              {day: '2019-07-08',value: 91},
              {day: '2019-09-10',value: 306},
              {day: '2019-11-01',value: 82},
              {day: '2019-03-21',value: 195},
              {day: '2019-08-24',value: 34},
              {day: '2019-06-13',value: 44},
              {day: '2019-11-22',value: 182},
              {day: '2019-04-05',value: 264},
              {day: '2019-10-04',value: 172},
              {day: '2019-04-15',value: 164},
              {day: '2019-03-13',value: 149},
              {day: '2019-11-14',value: 14},
              {day: '2019-10-02',value: 33},
              {day: '2019-08-05',value: 177},
              {day: '2019-01-27',value: 224},
              {day: '2019-07-16',value: 225},
              {day: '2019-07-31',value: 352},
              {day: '2019-04-17',value: 110},
              {day: '2019-12-18',value: 141},
              {day: '2019-01-28',value: 277},
              {day: '2019-05-13',value: 321},
              {day: '2019-03-07',value: 333},
              {day: '2019-05-28',value: 105},
              {day: '2019-11-26',value: 55},
              {day: '2019-05-26',value: 387},
              {day: '2019-01-07',value: 208},
              {day: '2019-06-28',value: 155},
              {day: '2019-01-12',value: 347},
              {day: '2019-05-31',value: 280}
            ]}
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
