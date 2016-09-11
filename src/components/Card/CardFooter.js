import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { moveTaskToProgress, moveTaskToTODO, moveTaskToDone, deleteTask } from '../../actions';

const CardFooter = (props) => {
  const moveToProgress = () => {
    props.dispatch(moveTaskToProgress(props.task));
  };

  const moteToTODO = () => {
    props.dispatch(moveTaskToTODO(props.task));
  };

  const moteToDone = () => {
    props.dispatch(moveTaskToDone(props.task));
  };

  const deleteTaskAction = () => {
    props.dispatch(deleteTask(props.task));
  };

  switch (props.task.state) {
    case 1:
      return (
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic green button" onClick={moveToProgress}>
              Move to Progress
            </div>
          </div>
        </div>
      );

    case 2:
      return (
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic green button" onClick={moteToDone}>Done</div>
            <div className="ui basic red button" onClick={moteToTODO}>Move To ToDo</div>
          </div>
        </div>
      );

    case 3:
      return (
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic green button" onClick={deleteTaskAction}>Approve</div>
            <div className="ui basic red button" onClick={moteToTODO}>Decline</div>
          </div>
        </div>
      );

    default: return null;
  }
};

CardFooter.propTypes = {
  task: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
});
const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(CardFooter);
