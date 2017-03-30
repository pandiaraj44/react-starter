import React from 'react';
import {render} from 'react-dom';
import routes from './routes/routes.jsx';
import {Router, browserHistory} from 'react-router';
import { createStore } from 'redux';
import reducers from './reducers/reducers.jsx';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import {ReduxAsyncConnect} from 'redux-async-connect';


const store = createStore(reducers, window.__data);

const history = syncHistoryWithStore(browserHistory, store)

render((
  <Provider store={store}>
    <Router history={history} routes={routes} render={(props)=>
      <ReduxAsyncConnect {...props}/>
    }/>
  </Provider>
), document.getElementById('app'));
