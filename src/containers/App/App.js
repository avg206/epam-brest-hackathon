import React, { Component } from 'react';

import Navbar from './../../components/Navbar';
import Card from './../../components/Card';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Navbar />

        <div className="ui three column grid">
          <div className="column">
            <div className="column-title">
              <a className="ui large tag red label">Items in ToDo</a>
            </div>

            <div className="ui cards">
              <Card type="1" />
            </div>
          </div>
          <div className="column">
            <div className="column-title">
              <a className="ui large tag orange label">Items in Progress</a>
            </div>

            <div className="ui cards">
              <Card type="2" />
            </div>
          </div>
          <div className="column">
            <div className="column-title">
              <a className="ui large tag green label">Items in Done</a>
            </div>

            <div className="ui cards">
              <Card type="3" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

