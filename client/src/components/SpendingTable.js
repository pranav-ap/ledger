import React, { Component } from 'react'

class SpendingTable extends Component {
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a> <strong>(C)</strong>
              </td>
              <td>38</td>
              <td>Bought this for me</td>
            </tr>
            <tr>
              <th>2</th>
              <td><a href="https://en.wikipedia.org/wiki/Arsenal_F.C." title="Arsenal F.C.">Arsenal</a></td>
              <td>38</td>
              <td>Bought this for me</td>
            </tr>
            <tr>
              <th>3</th>
              <td><a href="https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C." title="Tottenham Hotspur F.C.">Tottenham Hotspur</a></td>
              <td>38</td>
              <td>Bought this for me</td>
            </tr>
            <tr>
              <th>4</th>
              <td><a href="https://en.wikipedia.org/wiki/Manchester_City_F.C." title="Manchester City F.C.">Manchester City</a></td>
              <td>38</td>
              <td>Bought this for me</td>
            </tr>
            <tr>
              <th>5</th>
              <td><a href="https://en.wikipedia.org/wiki/Manchester_United_F.C." title="Manchester United F.C.">Manchester United</a></td>
              <td>38</td>
              <td>Bought this for me</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default SpendingTable;
