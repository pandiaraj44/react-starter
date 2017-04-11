import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-async-connect';

import HomeReducer from './HomeReducer.jsx';
import TaskReducer from './TaskReducer.jsx';
import LeftNavBarReducer from './LeftNavBarReducer.jsx';

const reducers = combineReducers({
  routing: routerReducer,
  HomeReducer,
  TaskReducer,
  LeftNavBarReducer,
  reduxAsyncConnect,
});

export default reducers;
