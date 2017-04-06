import React from 'react';
import {render} from 'react-dom';
import {getTaskList} from '../../actions/TaskAction.jsx';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

class Task extends React.Component {

  componentWillMount(){
    this.props.getTaskList();
  }

  onListClick = (path) => {
    this.props.history.replace(path);
  }

  render() {
    return(
      <div>

        <div style={{float: 'left', width:'50%'}}>
          <h1 onClick={(e)=>{this.onListClick("")}}>Home Content</h1>
          <ul style={{float: 'left', width:'50%'}}>
              {this.props.taskList &&
                this.props.taskList.map((object, index)=>{
                  return (<li key={index}>{object}</li>);
                })
              }
          </ul>
        </div>
        <div style={{float: 'right', width:'50%'}}>
          <h1 onClick={(e)=>{this.onListClick("/task")}}>Task</h1>
          <ul style={{float: 'right', width:'50%'}}>
              {this.props.taskList &&
                this.props.taskList.map((object, index)=>{
                  return (<li key={index}>{object}</li>);
                })
              }
          </ul>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    taskList: state.TaskReducer.taskList
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getTaskList: () => {
      dispatch(getTaskList())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Task);
