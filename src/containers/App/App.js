import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { openAddForm } from '../../actions';
import Navbar from './../../containers/Navbar';
import Cards from './../../components/Cards';
import AddForm from './../../containers/AddForm';

const App = (props) => {
  const tasks1 = props.tasks.filter((x) => x.state === 1 || x.state === 0) || [];
  const tasks2 = props.tasks.filter((x) => x.state === 2) || [];
  const tasks3 = props.tasks.filter((x) => x.state === 3) || [];

  return (
    <div className="ui container">
      <Navbar />
      {props.addPopup ? <AddForm /> : null}

      <div className="ui three column grid">
        <div className="column">
          <div className="column-title">
            <a className="ui large tag red label">Items in ToDo</a>
          </div>
          <div className="ui fluid card">
            <div className="content">
              <div className="extra content">
                <div className="ui two buttons">
                  <div className="ui basic green button" onClick={props.openForm}>
                    Add Item
                  </div>
                </div>
              </div>
            </div>
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
  addPopup: PropTypes.bool.isRequired,
};

const mapStateTpProps = (state) => ({
  tasks: state.tasks,
  addPopup: state.ui.addPopup,
});

const mapDispatchToProps = (dispatch) => ({
  openForm: () => dispatch(openAddForm()),
});

export default connect(mapStateTpProps, mapDispatchToProps)(App);
