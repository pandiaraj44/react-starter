import React from 'react';
import {render} from 'react-dom';
import {getCountryList} from '../../actions/HomeAction.jsx';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';


class HomeContent extends React.Component {

  componentWillMount(){
    this.props.getCountryList();
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

const mapStateToProps = (state, ownProps) => {
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
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContent);
