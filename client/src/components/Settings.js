import React, { Component } from 'react'
import { Chart } from "frappe-charts/dist/frappe-charts.esm"


class Settings extends Component {
  componentDidUpdate() {
    const data = {
      labels: ["12am-3am", "3am-6pm", "6am-9am", "9am-12am", "12pm-3pm", "3pm-6pm", "6pm-9pm", "9am-12am"],
      datasets: [
        {
          name: "Some Data", type: "bar",
          values: [25, 40, 30, 35, 8, 52, 17, -4]
        },
        {
          name: "Another Set", type: "line",
          values: [25, 50, -10, 15, 18, 32, 27, 14]
        }
      ]
    }

    const chart = new Chart("#Fchart", {
      data: data,
      type: 'percentage', // or 'bar', 'line', 'scatter', 'pie', 'percentage'
      height: 250,
      colors: ['#7cd6fd', '#743ee2'],
      valuesOverPoints: 1
    })


    document.getElementsByClassName('comparison')[0].remove()
  }

  render() {
    return (
      <div className="columns is-mobile Settings">
        <div className="column settings-column is-8">
          <h1 className='title'>Settings</h1>
          <div id="Fchart"></div>
        </div>
      </div>
    );
  }
}

export default Settings;
