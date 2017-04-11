import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-async-connect';
import { bindActionCreators } from 'redux';
import LinkCreator from '../../components/LinkCreator.jsx';

export default class Header extends Component {
  render() {
    return (
      <header id="header" className="page-topbar">
        <div className="navbar-fixed">
          <nav className="navbar-color">
            <div className="nav-wrapper">
              <ul className="left">
                <li>
                  <h1 className="logo-wrapper">
                    <LinkCreator href="#" className="brand-logo responsive">
                      <img src="/www/images/logo.png" alt="Logo" />
                    </LinkCreator>
                  </h1>
                </li>
              </ul>

              <ul className="right hide-on-med-and-down">
                <li>
                  <LinkCreator
                    href="javascript:void(0);"
                    className="waves-effect waves-block waves-light translation-button"
                    data-activates="profile-dropdown"
                  >
                    <img
                      src="/www/images/avatar.jpg"
                      className="circle responsive"
                      style={{ width: '36px', height: '36px' }}
                      alt="avatar"
                    />
                  </LinkCreator>
                  <ul
                    id="profile-dropdown"
                    className="dropdown-content"
                    style={{
                      whiteSpace: 'nowrap',
                      position: 'absolute',
                      top: '60px',
                      left: '1034px',
                      opacity: 1,
                      display: 'none',
                    }}
                  >
                    <li>
                      <LinkCreator href="#">
                        <i className="material-icons">account_circle</i>
                        <span className="profile-select">Profile</span>
                      </LinkCreator>
                    </li>
                    <li>
                      <LinkCreator href="#">
                        <i className="material-icons">settings</i>
                        <span className="profile-select">Settings</span>
                      </LinkCreator>
                    </li>
                    <li className="divider" />
                    <li>
                      <LinkCreator href="#">
                        <i className="mdi-action-lock-outline" />
                        <span className="profile-select">Logout</span>
                      </LinkCreator>
                    </li>
                  </ul>
                </li>

              </ul>

            </div>
          </nav>
        </div>
      </header>
    );
  }
}
