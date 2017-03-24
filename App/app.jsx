import React from 'react';
import {render} from 'react-dom';

export default class App extends React.Component {

  handleClick= (e) => {
    welcome();
  }

  render() {
    return(
      <div className={"demo-app"} onClick={this.handleClick}>
        <h1>Demo App</h1>
      </div>
    );
  }
}
