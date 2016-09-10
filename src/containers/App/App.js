import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Navbar from './../../components/Navbar';
import Cards from './../../components/Cards';

const App = ({ tasks }) => {
  return (
    <div className="ui container">
      <Navbar />

      <div className="ui three column grid">
        <div className="column">
          <div className="column-title">
            <a className="ui large tag red label">Items in ToDo</a>
          </div>

          <Cards tasks={tasks} />
        </div>
        <div className="column">
          <div className="column-title">
            <a className="ui large tag orange label">Items in Progress</a>
          </div>
        </div>
        <div className="column">
          <div className="column-title">
            <a className="ui large tag green label">Items in Done</a>
          </div>
        </div>
      </div>
    </div>
  );
};

App.propTypes = {
  tasks: PropTypes.array.isRequired,
};

const mapStateTpProps = (state) => ({
  tasks: state.tasks,
});

export default connect(mapStateTpProps)(App);

