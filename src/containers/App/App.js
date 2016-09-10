import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <h2 className="ui header">Attached Content</h2>
        <div className="ui three column grid">
          <div className="column">
            <div className="top attached ui segment">
              Segment 1
            </div>
            <div className="attached ui segment">
              Segment 2
            </div>
            <div className="attached ui segment">
              Segment 2
            </div>
            <div className="bottom attached ui segment">
              Segment 3
            </div>
            <div className="ui segments">
              <div className="ui segment">
                <p>Top</p>
              </div>
              <div className="ui segments">
                <div className="ui segment">
                  <p>Nested Top</p>
                </div>
                <div className="ui segment">
                  <p>Nested Middle</p>
                </div>
                <div className="ui segment">
                  <p>Nested Bottom</p>
                </div>
              </div>
              <div className="ui segment">
                <p>Middle</p>
              </div>
              <div className="ui horizontal segments">
                <div className="ui segment">
                  <p>Top</p>
                </div>
                <div className="ui segment">
                  <p>Middle</p>
                </div>
                <div className="ui segment">
                  <p>Bottom</p>
                </div>
              </div>
              <div className="ui segment">
                <p>Bottom</p>
              </div>
            </div>
          </div>
          <div className="column">
            <table className="top attached ui basic table">
              <thead>
                <th>Header</th>
                <th>Header</th>
                <th>Header</th>
              </thead>
              <tbody>
                <tr>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
              </tbody>
            </table>
            <table className="attached ui table">
              <tbody>
                <tr>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
              </tbody>
            </table>
            <table className="attached ui celled selectable table">
              <tbody>
                <tr>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
              </tbody>
            </table>
            <table className="bottom attached ui celled table">
              <thead>
                <th>Header</th>
                <th>Header</th>
                <th>Header</th>
              </thead>
              <tbody>
                <tr>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="column">
            <div className="top attached ui three item menu">
              <a className="item">Item</a>
              <a className="item">Item</a>
              <a className="item">Item</a>
            </div>
            <div className="attached ui three item menu">
              <a className="item">Item</a>
              <a className="item">Item</a>
              <a className="item">Item</a>
            </div>
            <div className="attached ui three item menu">
              <a className="item">Item</a>
              <a className="item">Item</a>
              <a className="item">Item</a>
            </div>
            <div className="bottom attached ui three item menu">
              <a className="item">Item</a>
              <a className="item">Item</a>
              <a className="item">Item</a>
            </div>

            <div className="ui top attached tabular menu">
              <a className="active item">Active Item</a>
              <a className="item">Item</a>
              <a className="item">Item</a>
            </div>
            <div className="ui bottom attached segment">
              Segment
            </div>

            <div className="ui top attached menu">
              <a className="active item">Active Item</a>
              <a className="item">Item</a>
              <a className="item">Item</a>
            </div>
            <div className="ui bottom attached segment">
              Segment
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;

