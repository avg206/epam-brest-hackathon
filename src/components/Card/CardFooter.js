import React, { PropTypes } from 'react';

const CardFooter = (props) => {
  switch (parseInt(props.task.state, 10)) {
    case 1:
      return (
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic green button">Move to Progress</div>
          </div>
        </div>
      );

    case 2:
      return (
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic green button">Done</div>
            <div className="ui basic red button">Move To ToDo</div>
          </div>
        </div>
      );

    case 3:
      return (
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic green button">Approve</div>
            <div className="ui basic red button">Decline</div>
          </div>
        </div>
      );

    default: return null;
  }
};

CardFooter.propTypes = {
  task: PropTypes.object.isRequired,
};

export default CardFooter;
