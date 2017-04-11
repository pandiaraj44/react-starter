import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-async-connect';
import { bindActionCreators } from 'redux';
import LinkCreator from '../../components/LinkCreator.jsx';

export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="footer-copyright">
          <div className="container white-text">
            Copyright © 2017
            {' '}
            <LinkCreator
              className="white-text"
              href="http://materializecss.com"
              target="_blank"
            >
              Materialize Css
            </LinkCreator>
            {' '}
            All rights reserved.
            <span className="right">
              {' '}
              Design and Developed by
              {' '}
              <LinkCreator
                className="grey-text text-lighten-4"
                href="http://materializecss.com"
              >
                Materialize Css
              </LinkCreator>
            </span>
          </div>
        </div>
      </footer>
    );
  }
}
