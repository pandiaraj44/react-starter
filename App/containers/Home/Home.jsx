import React from 'react';
import { render } from 'react-dom';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import LeftNavBar from '../NavBar/LeftNavBar.jsx';

export default class Home extends React.Component {
  render() {
    return (
      <div className="flexbox-parent">
        <Header />
        <main id="main" className="flexbox-item-grow">
          <div className="wrapper">
            <LeftNavBar />
            <section id="content" className="card margin-4 fixed-height">
              <div className="container">
                <div className="row">
                  <div className="col s12 m12 l12">
                    {this.props.children}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
