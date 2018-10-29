import React, { Component } from 'react'

class CashTable extends Component {
  render() {
    return (
      <div className="SpendingTable">
        <table className="table is-striped is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Item</th>
              <th>Cash</th>
              <th>Comments</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Leicester City</td>
              <td>38</td>
              <td>Bought this for me</td>
              <td><i className="far fa-trash-alt delete-btn"></i></td>
            </tr>
            <tr>
              <th>2</th>
              <td>Arsenal</td>
              <td>38</td>
              <td>Bought this for me</td>
              <td><i className="far fa-trash-alt delete-btn"></i></td>
            </tr>
            <tr>
              <th>3</th>
              <td>Tottenham Hotspur</td>
              <td>38</td>
              <td>Bought this for me</td>
              <td><i className="far fa-trash-alt delete-btn"></i></td>
            </tr>
            <tr>
              <th>4</th>
              <td>Manchester City</td>
              <td>38</td>
              <td>Bought this for me</td>
              <td><i className="far fa-trash-alt delete-btn"></i></td>
            </tr>
            <tr>
              <th>5</th>
              <td>Manchester United</td>
              <td>38</td>
              <td>Bought this for me</td>
              <td><i className="far fa-trash-alt delete-btn"></i></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CashTable;
