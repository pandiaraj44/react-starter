import React from 'react';
import {render} from 'react-dom';
import routes from './routes/routes.jsx';
import {Router, browserHistory} from 'react-router';
import { createStore } from 'redux';
import reducers from './reducers/reducers.jsx';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'


const store = createStore(reducers);

const history = syncHistoryWithStore(browserHistory, store)

render((
  <Provider store={store}>
    <Router history={history} routes={routes}/>
  </Provider>
), document.getElementById('app'));
