import React from 'react';
import { render } from 'react-dom';

export default class App extends React.Component {
  handleClick = e => {
    welcome();
  };

  render() {
    return (
      <div className="flexbox-parent">
        {this.props.children}
      </div>
    );
  }
}
