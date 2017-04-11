import React from 'react';
import { render } from 'react-dom';
import * as HomeAction from '../../actions/HomeAction.jsx';
import * as TaskAction from '../../actions/TaskAction.jsx';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { asyncConnect } from 'redux-async-connect';
import { bindActionCreators } from 'redux';
import ContentTitle from '../Content/ContentTitle.jsx';
import Loader from '../Loader/Loader.jsx';
import LinkCreator from '../../components/LinkCreator.jsx';

//dispatch => bindActionCreators({getCountryList}, dispatch))

//Used to perform async operations before rendering the components
//Note* Place/dispatch your action call here
@asyncConnect([
  {
    promise: ({ store: { dispatch, getState } }) => {
      const promises = [];
      let p1 = new Promise((resolve, reject) => {
        setTimeout(resolve, 10, 'p1');
      });
      let p2 = dispatch(TaskAction.getTaskList());
      return Promise.all(promises);
    },
  },
])
@connect(
  state => ({
    list: state.HomeReducer.list,
    loading: state.HomeReducer.loading,
    loaded: state.HomeReducer.loaded,
    taskList: state.TaskReducer.taskList,
  }),
  dispatch => {
    return bindActionCreators(
      Object.assign({}, HomeAction, TaskAction),
      dispatch
    );
  }
)
export default //To delay homepage by 1 sec
//promises.push(p1);
// To load task list
//promises.push(p2);
//Wait for each promise to complete
//Map your reducer state to props here
//Bind your action creators to props here
class HomeContent extends React.Component {
  componentWillMount() {
    this.props.getCountryList(); //To load the country list here
    //this.props.getTaskList();
  }

  onListClick = path => {
    this.props.history.replace(path);
  };

  componentWillUnmount() {
    this.props.clearCountryList();
  }

  render() {
    return (
      <div>
        <ContentTitle>Home</ContentTitle>
        {this.props.loading == false &&
          <div className="no-padding table-outter-height">
            <div className="no-padding table-inner-height">
              <table className="striped">
                <thead>
                  <tr>
                    <th>Country Name</th>
                    <th>Country Code</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <td>
                      <ul className="pagination">
                        <li className="disabled">
                          <LinkCreator href="#!">
                            <i className="material-icons">chevron_left</i>
                          </LinkCreator>
                        </li>
                        <li className="active">
                          <LinkCreator href="#!">1</LinkCreator>
                        </li>
                        <li className="waves-effect">
                          <LinkCreator href="#!">2</LinkCreator>
                        </li>
                        <li className="waves-effect">
                          <LinkCreator href="#!">3</LinkCreator>
                        </li>
                        <li className="waves-effect">
                          <LinkCreator href="#!">4</LinkCreator>
                        </li>
                        <li className="waves-effect">
                          <LinkCreator href="#!">5</LinkCreator>
                        </li>
                        <li className="waves-effect">
                          <LinkCreator href="#!">
                            <i className="material-icons">chevron_right</i>
                          </LinkCreator>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tfoot>
                <tbody>
                  {this.props.list &&
                    this.props.list.map((object, index) => {
                      return (
                        <tr key={index}>
                          <td>{object.name}</td>
                          <td>{object.code}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>

            </div>
          </div>}
        {this.props.loading == true && <Loader />}
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
