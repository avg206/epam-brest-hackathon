import React, { PropTypes } from 'react';

import Card from './../../components/Card';

const Cards = ({ tasks }) => (
  <div className="ui cards">
    {tasks.map((task, index) => <Card key={index} task={task} />)}
  </div>
);

Cards.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default Cards;
