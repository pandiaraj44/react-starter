import React from 'react';
import {render} from 'react-dom';
import * as HomeAction from '../../actions/HomeAction.jsx';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { asyncConnect } from 'redux-async-connect';

//dispatch => bindActionCreators({getCountryList}, dispatch))

@asyncConnect([{
  promise: ({store: {dispatch, getState}}) => {
    const promises = [];
    let p1 = new Promise((resolve, reject) => {
      setTimeout(resolve, 1000, 'p1'); //To delay homepage by 1 sec
    });
    let p2 = dispatch(HomeAction.getCountryList1()); // To load country list
    promises.push(p1);
    promises.push(p2);
    return Promise.all(promises); //Wait for each promise to complete
  }
}])
@connect(
    state => ({list: state.HomeReducer.list}),
    HomeAction)
export default class HomeContent extends React.Component {

  componentWillMount(){
    //this.props.getCountryList1();
  }

  onListClick = (path) => {
    this.props.history.replace(path);
  }

  render() {
    return(
      <div>
        <div>
          <h1 style={{float: 'left', width:'50%'}} onClick={(e)=>{this.onListClick("/home")}}>Home Content</h1>
          <h1 style={{float: 'right', width:'50%'}} onClick={(e)=>{this.onListClick("/home/task")}}>Task</h1>
        </div>
        <br/>
        <ul >
            {this.props.list &&
              this.props.list.map((object, index)=>{
                return (<li key={index}>{object}</li>);
              })
            }
        </ul>
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
