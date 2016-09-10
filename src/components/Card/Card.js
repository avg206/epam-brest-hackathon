import React, { PropTypes } from 'react';

import CardFooter from './CardFooter.js';

const Card = (props) => (
  <div className="ui card">
    <div className="content">
      <div className="header">{props.task.title}</div>
      <div className="meta">
        <span className="right floated time">2 days ago</span>
        <a>Anatoli Huseu1</a>
      </div>
      <div className="description">
        <p>{props.task.text}</p>
      </div>
    </div>
    <div className="extra content">
      <span className="right floated time">
        <i className="user icon" /> Alena Orgish
      </span>
      <strong>Assigned:</strong>
    </div>
    <CardFooter task={props.task} />
  </div>
);

Card.propTypes = {
  task: PropTypes.object.isRequired,
};

export default Card;
