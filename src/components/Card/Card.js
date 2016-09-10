import React, { PropTypes } from 'react';

const Card = ({ type }) => {
  switch (type) {
    case '1':
      return (
        <div className="ui card">
          <div className="content">
            <div className="header">Cute Dog</div>
            <div className="meta">
              <span className="right floated time">2 days ago</span>
              <a>Anatoli Huseu1</a>
            </div>
            <div className="description">
              <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p>
              <p>Many people also have their own barometers for what makes a cute dog.</p>
            </div>
          </div>
          <div className="extra content">
            <span className="right floated time">
              <i className="user icon" /> Alena Orgish
            </span>
            <strong>Assigned:</strong>
          </div>
          <div className="extra content">
            <div className="ui two buttons">
              <div className="ui basic green button">Move to Progress</div>
            </div>
          </div>
        </div>
      );

    case '2':
      return (
        <div className="card">
          <div className="content">
            <div className="header">Cute Dog</div>
            <div className="meta">
              <span className="right floated time">2 days ago</span>
              <a>Anatoli Huseu1</a>
            </div>
            <div className="description">
              <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p>
              <p>Many people also have their own barometers for what makes a cute dog.</p>
            </div>
          </div>
          <div className="extra content">
            <span className="right floated time">
              <i className="user icon" /> Alena Orgish
            </span>
            <strong>Assigned:</strong>
          </div>
          <div className="extra content">
            <div className="ui two buttons">
              <div className="ui basic green button">Done</div>
              <div className="ui basic red button">Move To ToDo</div>
            </div>
          </div>
        </div>
      );

    case '3':
      return (
        <div className="card">
          <div className="content">
            <div className="header">Cute Dog</div>
            <div className="meta">
              <span className="right floated time">2 days ago</span>
              <a>Anatoli Huseu1</a>
            </div>
            <div className="description">
              <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p>
              <p>Many people also have their own barometers for what makes a cute dog.</p>
            </div>
          </div>
          <div className="extra content">
            <span className="right floated time">
              <i className="user icon" /> Alena Orgish
            </span>
            <strong>Assigned:</strong>
          </div>
          <div className="extra content">
            <div className="ui two buttons">
              <div className="ui basic green button">Approve</div>
              <div className="ui basic red button">Decline</div>
            </div>
          </div>
        </div>
      );

    default: return null;
  }
};

Card.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Card;
