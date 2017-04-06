import React from 'react';
import {Route, IndexRoute} from 'react-router';

import {
  App,
  Home,
  About,
  Login,
  NotFound,
  HomeContent,
  Task
} from '../containers/index.jsx';

const isLoggedIn = (nextState, replace, cb) => {
  if(!nextState){
    replace('/login');
    cb();
  }else {
    cb();
  }
}

export default (
    <Route path="/" component={App}>

      <Route component={Home} onEnter={isLoggedIn}>
        <IndexRoute component={HomeContent}/>
        <Route path="task" component={Task}/>
      </Route>

      <Route path="login" component={Login}/>
      <Route path="about" component={About}/>

      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />

    </Route>
);
