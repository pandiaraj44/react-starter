import React from 'react';
import { render } from 'react-dom';

export default class ContentTitle extends React.Component {
  render() {
    return (
      <ul>
        <h5 style={{ color: '#E57373' }}>{this.props.children}</h5>
        <li className="divider red lighten-2" />
      </ul>
    );
  }
}
