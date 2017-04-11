import React from 'react';
import { render } from 'react-dom';
import * as TaskAction from '../../actions/TaskAction.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import Loader from '../Loader/Loader.jsx';
import ContentTitle from '../Content/ContentTitle.jsx';

@connect(
  state => ({
    taskList: state.TaskReducer.taskList,
    loading: state.TaskReducer.loading,
  }),
  dispatch => {
    return bindActionCreators(Object.assign({}, TaskAction), dispatch);
  }
)
export default class Task extends React.Component {
  componentWillMount() {
    this.props.getTaskList();
  }

  onListClick = path => {
    this.props.history.replace(path);
  };

  render() {
    return (
      <div>
        <ContentTitle>Create Task</ContentTitle>
        {this.props.loading == true && <Loader />}
      </div>
    );
  }
}
