import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'


import HomeReducer from './HomeReducer.jsx';
import TaskReducer from './TaskReducer.jsx';


const reducers = combineReducers({
  routing: routerReducer,
  HomeReducer,
  TaskReducer
});

export default reducers;
