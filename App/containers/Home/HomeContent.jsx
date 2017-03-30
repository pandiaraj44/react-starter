import React from 'react';
import {render} from 'react-dom';
import * as HomeAction from '../../actions/HomeAction.jsx';
import * as TaskAction from '../../actions/TaskAction.jsx';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { asyncConnect } from 'redux-async-connect';
import {bindActionCreators} from 'redux';

//dispatch => bindActionCreators({getCountryList}, dispatch))

//Used to perform async operations before rendering the components
//Note* Place/dispatch your action call here
@asyncConnect([{
  promise: ({store: {dispatch, getState}}) => {
    const promises = [];
    let p1 = new Promise((resolve, reject) => {
      setTimeout(resolve, 10, 'p1'); //To delay homepage by 1 sec
    });
    promises.push(p1);
    let p2 = dispatch(TaskAction.getTaskList()); // To load task list
    promises.push(p2);
    return Promise.all(promises); //Wait for each promise to complete
  }
}])
@connect(
    state => ({ //Map your reducer state to props here
      list: state.HomeReducer.list,
      loading: state.HomeReducer.loading,
      loaded: state.HomeReducer.loaded,
      taskList: state.TaskReducer.taskList
    }),
    (dispatch) => {
      return bindActionCreators(Object.assign({}, HomeAction, TaskAction), dispatch); //Bind your action creators to props here
    }
)
export default class HomeContent extends React.Component {

  componentWillMount(){
    this.props.getCountryList(); //To load the country list here
    //this.props.getTaskList();
  }

  onListClick = (path) => {
    this.props.history.replace(path);
  }

  render() {
    return(
      <div>
        <div style={{float: 'left', width:'50%'}}>
          <h1 onClick={(e)=>{this.onListClick("/home")}}>Home Content</h1>
          <ul style={{float: 'left', width:'50%'}}>
              {this.props.list &&
                this.props.list.map((object, index)=>{
                  return (<li key={index}>{object.name}</li>);
                })
              }
          </ul>
        </div>
        <div style={{float: 'right', width:'50%'}}>
          <h1 onClick={(e)=>{this.onListClick("/home/task")}}>Task</h1>
          <ul style={{float: 'right', width:'50%'}}>
              {this.props.taskList &&
                this.props.taskList.map((object, index)=>{
                  return (<li key={index}>{object}</li>);
                })
              }
          </ul>
        </div>

        {(this.props.loading == true) &&
          <p>Loading......</p>
        }

      </div>
    );
  }
}

/*const mapStateToProps = (state, ownProps) => {
  return {
    list: state.HomeReducer.list
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getCountryList: () => {
      dispatch(getCountryList())
    }
  }
}*/
