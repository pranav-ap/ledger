import React, { Component } from 'react'
import Chart from 'chart.js/dist/Chart.js';
import HeatMapChart from 'chart.heatmap.js/dst/Chart.HeatMap.S'


class Report extends Component {
  componentDidMount() {
    let data = {
      labels: ['20 - 21 may 2018', '21 may 2018', '2h', '3h', '4h', '5h', '6h', '7h', '8h', '9h', '10h', '11h'],
      datasets: [
        {
          label: 'Sun',
          data: [8, 6, 5, 7, 9, 8, 1, 6, 3, 3, 8, 7]
        },
        {
          label: 'Mon',
          data: [8, 6, 5, 7, 9, 8, 1, 6, 3, 3, 8, 7]
        },
        {
          label: 'Tue',
          data: [6, 8, 5, 6, 5, 5, 7, 0, 0, 3, 0, 7]
        },
        {
          label: 'Wed',
          data: [8, 5, 6, 4, 2, 2, 3, 0, 2, 0, 10, 8]
        },
        {
          label: 'Thu',
          data: [4, 0, 7, 4, 6, 3, 2, 4, 2, 10, 8, 2]
        },
        {
          label: 'Fri',
          data: [1, 0, 0, 7, 0, 4, 1, 3, 4, 5, 1, 10]
        },
        {
          label: 'Sat',
          data: [8, 6, 5, 7, 9, 8, 1, 6, 3, 3, 8, 7]
        }
      ]
    }

    let heatmap = document.getElementById('heatmap')
    let ctx = heatmap.getContext('2d');
    let options = {
      rounded: false,
      paddingScale: 0.1,
      labelScale: 0.4,
      tooltipTemplate: "<%= yLabel %> : Rs. <%= value %>",
      colors: ['rgb(192, 229, 89)', 'rgb(118, 237, 122)', 'rgb(9, 160, 87)']
    }

    let chart = new HeatMapChart(ctx).HeatMap(data, options)

    ////

    ctx = document.getElementById("myChart");

    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        },
        barThickness: 'flex'
      }
    });
  }

  render() {
    return (
      <div className='columns is-mobile Report'>
        <div className='column report-column is-8'>
          <canvas id="heatmap" width="800" height="300"></canvas>
          <br />
          <canvas id="myChart" width="400" height="200"></canvas>
        </div>
      </div>
    );
  }
}

export default Report;

    // <h1 className='title'>Report</h1>