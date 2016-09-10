import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { closeAddForm, addNewTask } from '../../actions';

const topStyle = { display: 'block !important' };
const secondStyle = { marginTop: '-240px', display: 'block !important' };

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
      category: '',
    };

    this.onChange = this.onChange.bind(this);
    this.saveTask = this.saveTask.bind(this);
  }

  onChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  saveTask() {
    const assigment = this.props.assigments.find((item) => item.name === this.state.category) || {};
    const data = {
      ...this.state,
      assigne: assigment.user,
      creator: this.props.name,
    };

    console.log(data);

    this.props.addNewTask(data);
    this.props.closeForm();
  }

  render() {
    let options = [{ name: '---' }].concat(this.props.assigments);
    options = options
      .map((item, index) => <option key={index} value={item.name}>{item.name}</option>);

    return (
      <div className="ui dimmer modals page transition visible active" style={topStyle}>
        <div className="ui small test modal transition visible active" style={secondStyle}>
          <div className="header">
            Add new Item
          </div>
          <div className="content">
            <form className="ui form">
              <div className="field">
                <label>Task Title</label>
                <input type="text" onChange={this.onChange('title')} />
              </div>
              <div className="field">
                <label>Task Description</label>
                <textarea rows="4" onChange={this.onChange('text')} />
              </div>
              <div className="field">
                <label>Category</label>
                <select className="form-select" onChange={this.onChange('category')}>
                  {options}
                </select>
              </div>
            </form>
          </div>
          <div className="actions">
            <button onClick={this.props.closeForm} className="ui negative button">
              Cancel
            </button>
            <button onClick={this.saveTask} className="ui positive right labeled icon button">
              Add
              <i className="checkmark icon" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

AddForm.propTypes = {
  closeForm: PropTypes.func.isRequired,
  addNewTask: PropTypes.func.isRequired,
  assigments: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  assigments: state.assigments,
  name: state.user.name,
});
const mapDispatchToProps = (dispatch) => ({
  closeForm: () => dispatch(closeAddForm()),
  addNewTask: (data) => dispatch(addNewTask(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
