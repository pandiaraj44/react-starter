import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-async-connect';
import { bindActionCreators } from 'redux';
import LinkCreator from '../../components/LinkCreator.jsx';
import LeftNavBarItem from './LeftNavBarItem.jsx';
import { browserHistory } from 'react-router';
import * as LeftNavBarAction from '../../actions/LeftNavBarAction.jsx';

@connect(
  state => ({
    sideMenuList: state.LeftNavBarReducer.sideMenuList,
    sideMenuListClone: state.LeftNavBarReducer.sideMenuListClone,
  }),
  dispatch => {
    return bindActionCreators(Object.assign({}, LeftNavBarAction), dispatch);
  }
)
export default class LeftNavBar extends Component {
  componentWillMount() {
    this.props.getSideMenuList();
  }

  render() {
    return (
      <aside id="left-sidebar-nav">
        <ul
          id="slide-out"
          className="side-nav fixed leftside-navigation ps-container ps-active-y"
          style={{ width: '240px' }}
        >
          {this.props.sideMenuList &&
            this.props.sideMenuList.map((object, index) => {
              return (
                <LeftNavBarItem
                  onSideMenuClick={this.onSideMenuClick}
                  item={object}
                  index={index}
                  key={index}
                />
              );
            })}
          <li className="li-hover"><div className="divider" /></li>
          <div
            className="ps-scrollbar-x-rail"
            style={{ left: '0px', bottom: '3px' }}
          >
            <div
              className="ps-scrollbar-x"
              style={{ left: '0px', width: '0px' }}
            />
          </div>
          <div
            className="ps-scrollbar-y-rail"
            style={{ top: '0px', height: '614px', right: '3px' }}
          >
            <div
              className="ps-scrollbar-y"
              style={{ top: '0px', height: '287px' }}
            />
          </div>
        </ul>
        <LinkCreator
          href="#"
          data-activates="slide-out"
          className="sidebar-collapse btn-floating btn-medium waves-effect waves-light red lighten-2 hide-on-large-only"
        >
          <i className="material-icons">menu</i>
        </LinkCreator>
      </aside>
    );
  }

  onSideMenuClick = (item, child, isFromParent) => {
    console.log('onSideMenuClick Parent Item', item, ' Child Item ', child);
    if (child) {
      let sideMenuList = [...this.props.sideMenuListClone];
      sideMenuList.forEach(sideMenu => {
        if (sideMenu.id == item.id) {
          sideMenu.children.forEach(children => {
            if (children.id == child.id) {
              children.isActive = true;
              sideMenu.isActive = true;
            } else {
              children.isActive = false;
            }
          });
        } else {
          sideMenu.isActive = false;
        }
      });
      this.props.updateSideMenuList(sideMenuList);
    } else {
      let sideMenuList = [...this.props.sideMenuListClone];
      sideMenuList.forEach(sideMenu => {
        if (sideMenu.id == item.id) {
          sideMenu.isActive = true;
        } else {
          sideMenu.isActive = false;
          if (sideMenu.children) {
            sideMenu.children.forEach(children => {
              children.isActive = false;
              if (isFromParent && isFromParent == true) {
                //
              }
            });
          }
        }
      });
      console.log('sideMenuList', sideMenuList);
      this.props.updateSideMenuList(sideMenuList);
    }
  };
}
