import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';



import HomeReducer from './HomeReducer.jsx';
import TaskReducer from './TaskReducer.jsx';


const reducers = combineReducers({
  routing: routerReducer,
  HomeReducer,
  TaskReducer,
  reduxAsyncConnect
});

export default reducers;
