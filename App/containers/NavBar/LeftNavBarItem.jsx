import React, { Component } from 'react';
import { render } from 'react-dom';
import LinkCreator from '../../components/LinkCreator.jsx';
import TypeCheck from '../../util/TypeCheck.jsx';

export default class LeftNavBarItem extends Component {
  renderChildItems(parentItem, item, index) {
    let listClassName = 'no-padding';
    if (item.isActive && item.isActive == true) {
      listClassName = listClassName + ' active';
    } else {
      listClassName = 'no-padding';
    }
    return (
      <li className={listClassName} key={index}>
        <LinkCreator
          onClick={() => {
            this.props.onSideMenuClick(parentItem, item);
          }}
          className="no-padding"
        >
          {item.icon && <i className="material-icons">{item.icon}</i>}
          {item.name}
        </LinkCreator>
      </li>
    );
  }

  renderItems() {
    let item = this.props.item;
    let index = this.props.index;
    if (TypeCheck.isArray(item.children)) {
      let listClassName = '';
      let linkClassName = 'collapsible-header waves-effect waves-red';
      if (item.isActive && item.isActive == true) {
        listClassName = listClassName + ' active';
        linkClassName = linkClassName + ' active';
      } else {
        listClassName = 'no-padding';
        linkClassName = 'collapsible-header waves-effect waves-red';
      }
      return (
        <li className="no-padding" key={index}>
          <ul className="collapsible collapsible-accordion">
            <li className={listClassName}>
              <LinkCreator
                onClick={() => {
                  this.props.onSideMenuClick(item, null, isFromParent);
                }}
                className={linkClassName}
              >
                {item.icon && <i className="material-icons">{item.icon}</i>}
                {item.name}
              </LinkCreator>

              <div className="collapsible-body">
                <ul>
                  {item.children.map((object, index) => {
                    return this.renderChildItems(item, object, index);
                  })}
                </ul>
              </div>

            </li>

          </ul>
        </li>
      );
    } else {
      let listClassName = 'no-padding';
      if (item.isActive && item.isActive == true) {
        listClassName = listClassName + ' active';
      } else {
        listClassName = 'no-padding';
      }
      return (
        <li className={listClassName} key={index}>
          <LinkCreator
            onClick={() => {
              this.props.onSideMenuClick(item);
            }}
            className="waves-effect waves-red"
          >
            {item.icon && <i className="material-icons">{item.icon}</i>}
            {item.name}
          </LinkCreator>
        </li>
      );
    }
  }

  render() {
    return this.renderItems();
  }
}
