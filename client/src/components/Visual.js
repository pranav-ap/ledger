import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from 'chart.js'

class Visual extends Component {
  setupChart() {
    let { transactions } = this.props

    const totalExpenses = {}
    transactions.forEach(t => {
      totalExpenses[t.date] = Number(totalExpenses[t.date]) || 0
      totalExpenses[t.date] += Number(t.expense)
    })

    const labels = Object.keys(totalExpenses)

    const backgroundColor = []
    const borderColor = []
    for (let i = 0; i < labels.length; i++) {
      backgroundColor.push('rgba(255, 99, 132, 0.2)')
      borderColor.push('rgba(255,99,132,1)')
    }

    const ctx = document.getElementById('chart').getContext('2d')
    const chart = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels,
        datasets: [{
          label: 'Total Expense',
          data: labels.map(key => totalExpenses[key]),
          backgroundColor,
          borderColor,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
    })
  }

  componentDidMount() {
    this.setupChart()
  }

  componentDidUpdate() {
    this.setupChart()
  }

  render() {
    return (
      <div className='columns is-mobile Visual'>
        <div className='column visual-column is-8'>
          <h1 className='title custom-title'>Visual</h1>
          <canvas id='chart' width='500' />
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
