import React, {Component} from 'react';
import {render} from 'react-dom';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-async-connect';
import {bindActionCreators} from 'redux';

export default class Footer extends Component{
  render(){
    return(
      <footer className="page-footer">
            <div className="footer-copyright">
              <div className="container white-text">
                Copyright © 2017 <a className="white-text" href="http://materializecss.com" target="_blank">Materialize Css</a> All rights reserved.
                <span className="right"> Design and Developed by <a className="grey-text text-lighten-4" href="http://materializecss.com">Materialize Css</a></span>
              </div>
            </div>
      </footer>
    );
  }
}
