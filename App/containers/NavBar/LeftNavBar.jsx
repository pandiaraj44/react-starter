import React, {Component} from 'react';
import {render} from 'react-dom';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-async-connect';
import {bindActionCreators} from 'redux';

export default class LeftNavBar extends Component{
  render(){
    return(
      <aside id="left-sidebar-nav">
        <ul id="slide-out" className="side-nav fixed leftside-navigation ps-container ps-active-y" style={{width: "240px"}}>
          <li className="bold active"><a href="#" className="waves-effect waves-red"><i className="material-icons">dashboard</i> Dashboard</a>
          </li>
          <li className="no-padding">
            <ul className="collapsible collapsible-accordion">
              <li className="bold"><a className="collapsible-header waves-effect waves-red"><i className="material-icons">account_box</i> User</a>
                <div className="collapsible-body">
                  <ul>
                    <li><a href="#">Login</a>
                    </li>
                    <li><a href="#">Lock Screen</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
          <li className="li-hover"><div className="divider"></div></li>
          <div className="ps-scrollbar-x-rail" style={{left: "0px", bottom: "3px"}}>
            <div className="ps-scrollbar-x" style={{left: "0px", width: "0px"}}></div>
          </div>
          <div className="ps-scrollbar-y-rail" style={{top: "0px", height: "614px", right: "3px"}}>
            <div className="ps-scrollbar-y" style={{top: "0px", height: "287px"}}></div>
          </div>
          <a href="#" data-activates="slide-out" className="sidebar-collapse btn-floating btn-medium waves-effect waves-light red lighten-2 hide-on-large-only">
            <i className="material-icons">menu</i>
          </a>
        </ul>
      </aside>
    );
  }
}
