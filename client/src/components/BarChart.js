import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ResponsiveBar } from '@nivo/bar'
import moment from "./Heatmap";

class BarChart extends Component {
  render() {
    const { transactions } = this.props
    let data = transactions.map(t => {
      return {
        date: t.date,
        value: Number(t.expense)
      }
    })

    console.log(data)

    return (
      <div className='columns is-mobile Visual'>
        <div className='column visual-column is-8'>
          <h1 className='title custom-title'>Barchart</h1>
          <div id={'barchart'}>
            <ResponsiveBar
              data={data}
              indexBy="date"
              margin={{
                "top": 30,
                "right": 10,
                "bottom": 60,
                "left": 10
              }}
              layout="horizontal"
              colors="nivo"
              colorBy="id"
              borderColor="inherit:darker(1.6)"
              axisTop={{
                "tickSize": 5,
                "tickPadding": 5,
                "tickRotation": 0,
                "legend": "",
                "legendOffset": 36
              }}
              axisRight={{
                "tickSize": 5,
                "tickPadding": 5,
                "tickRotation": 0,
                "legend": "",
                "legendOffset": 0
              }}
              axisBottom={{
                "tickSize": 5,
                "tickPadding": 5,
                "tickRotation": 0,
                "legend": "country",
                "legendPosition": "middle",
                "legendOffset": 32
              }}
              axisLeft={{
                "tickSize": 5,
                "tickPadding": 5,
                "tickRotation": 0,
                "legend": "food",
                "legendPosition": "middle",
                "legendOffset": -40
              }}
              enableGridX={true}
              labelSkipWidth={12}
              labelSkipHeight={12}
              labelTextColor="inherit:darker(1.6)"
              animate={true}
              motionStiffness={90}
              motionDamping={15}
              legends={[]}
            />
          </div>

        </div>
      </div>
    )
  }
}

export default connect(state => {
  return {
    transactions: state.transactions.data
  }
})(BarChart)
