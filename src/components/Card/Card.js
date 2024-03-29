import React, { PropTypes } from 'react';
import moment from 'moment';

import CardFooter from './CardFooter.js';

const Card = (props) => {
  const assigne = (
    <div className="extra content">
      <span className="right floated time">
        <div className="mini ui basic red button"><i className="remove user icon"/></div>
        <i className="user icon" /> {props.task.assigne}
      </span>
      <strong>Assigned:</strong>
    </div>
  );
  const category = (
    <div className="extra content">
      <strong className="category-title">{props.task.category}</strong>
    </div>
  );


  return (
    <div className="ui fluid card">
      <div className="content">
        <div className="header">{props.task.title}</div>
        <div className="meta">
          <span className="right floated time">{moment(props.task.time).fromNow()}</span>
          <a>{props.task.creator}</a>
        </div>
        <div className="description">
          <p>{props.task.text}</p>
        </div>
      </div>

      {props.task.category ? category : null}
      {props.task.assigne ? assigne : null}
      <CardFooter task={props.task} />
    </div>
  );
};

Card.propTypes = {
  task: PropTypes.object.isRequired,
};

export default Card;
