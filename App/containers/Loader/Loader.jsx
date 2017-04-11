import React from 'react';
import { render } from 'react-dom';

export default class ContentTitle extends React.Component {
  render() {
    return (
      <div className="loader-height">
        <div className="preloader-wrapper small active loader-center">
          <div className="spinner-layer spinner-red-only">
            <div className="circle-clipper left">
              <div className="circle" />
            </div>
            <div className="gap-patch">
              <div className="circle" />
            </div>
            <div className="circle-clipper right">
              <div className="circle" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
