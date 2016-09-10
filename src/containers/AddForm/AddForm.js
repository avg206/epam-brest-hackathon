import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { closeAddForm } from '../../actions';

const topStyle = { display: 'block !important' };
const secondStyle = { marginTop: '-240px', display: 'block !important' };

const AddForm = (props) => (
  <div className="ui dimmer modals page transition visible active" style={topStyle}>
    <div className="ui small test modal transition visible active" style={secondStyle}>
      <div className="header">
        Add new Item
      </div>
      <div className="content">
        <form className="ui form">
          <div className="field">
            <label>Task Title</label>
            <input type="text" name="first-name" placeholder="First Name" />
          </div>
          <div className="field">
            <label>Task Description</label>
            <textarea rows="4" />
          </div>
        </form>
      </div>
      <div className="actions">
        <button onClick={props.closeForm} className="ui negative button">
          Cancel
        </button>
        <button onClick={props.closeForm} className="ui positive right labeled icon button">
          Add
          <i className="checkmark icon" />
        </button>
      </div>
    </div>
  </div>
);

AddForm.propTypes = {
  closeForm: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  closeForm: () => dispatch(closeAddForm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
