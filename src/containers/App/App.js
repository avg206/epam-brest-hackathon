import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Navbar from './../../components/Navbar';
import Cards from './../../components/Cards';

const App = ({ tasks }) => {
  const tasks1 = tasks.filter((x) => x.state === '1') || [];
  const tasks2 = tasks.filter((x) => x.state === '2') || [];
  const tasks3 = tasks.filter((x) => x.state === '3') || [];

  return (
    <div className="ui container">
      <Navbar />

      <div className="ui three column grid">
        <div className="column">
          <div className="column-title">
            <a className="ui large tag red label">Items in ToDo</a>
          </div>

          <Cards tasks={tasks1} />
        </div>
        <div className="column">
          <div className="column-title">
            <a className="ui large tag orange label">Items in Progress</a>
          </div>

          <Cards tasks={tasks2} />
        </div>
        <div className="column">
          <div className="column-title">
            <a className="ui large tag green label">Items in Done</a>
          </div>

          <Cards tasks={tasks3} />
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

