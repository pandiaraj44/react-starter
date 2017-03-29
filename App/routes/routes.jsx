import React from 'react';
import {Route, IndexRoute} from 'react-router';

import {
  App,
  Home,
  About,
  Login,
  NotFound,
  HomeContent
} from '../containers/index.jsx';

const isLoggedIn = (nextState, replace, cb) => {
  if(!nextState){
    replace('/');
    cb();
  }else {
    cb();
  }
}

export default (
    <Route path="/" component={App}>
      <IndexRoute component={Login}/>

      <Route path="home" component={Home} onEnter={isLoggedIn}>
        <IndexRoute component={HomeContent}/>
      </Route>

      <Route path="login" component={Login}/>
      <Route path="about" component={About}/>

      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />

    </Route>
);
