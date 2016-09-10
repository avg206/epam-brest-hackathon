import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { openAddForm } from '../../actions';

const Navbar = (props) => (
  <div className="ui grey inverted top fixed menu">
    <div className="ui small container">
      <div className="header item">
        Office Help Desk
      </div>
      <div className="right menu">
        <a className="ui active red item" onClick={props.openForm}>
          <i className="plus icon" /> Add Item
        </a>
      </div>
    </div>
  </div>
);

Navbar.propTypes = {
  openForm: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  openForm: () => dispatch(openAddForm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
