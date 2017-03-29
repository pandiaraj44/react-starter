import React from 'react';
import {render} from 'react-dom';

export default class Home extends React.Component {

  render() {
    return(
      <div>
        <div className={"header"} onClick={this.handleClick}>
          <h1>Demo App Header</h1>
        </div>
        <div className={"content"} onClick={this.handleClick}>
          {this.props.children}
        </div>
        <div className={"footer"} onClick={this.handleClick}>
          <h1>Demo App Footer</h1>
        </div>
      </div>
    );
  }
}
