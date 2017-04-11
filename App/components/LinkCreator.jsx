import React, { Component } from 'react';
import { render } from 'react-dom';

export default class LinkCreator extends Component {
  render() {
    return (
      <a {...this.props}>
        {this.props.children}
      </a>
    );
  }
}
