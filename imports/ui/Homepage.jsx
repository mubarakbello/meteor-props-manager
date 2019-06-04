import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import MyProperties from './MyProperties';
import AddProperty from './AddProperty';
import ExploreProperties from './ExploreProperties';

import Logo from './images/images.png';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentlyShowing: 'add'
    };
  }

  switchTab = (tab) => {
    this.setState(() => ({
      currentlyShowing: tab
    }))
  }

  render() {
    const {currentlyShowing} = this.state;
    const email = Meteor.user().emails[0].address;
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
          <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">
              <img className="img-brand" src={Logo} alt="Logo image"/>
            </a>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Pricing</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">Lorem ipsum</a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0" onSubmit={(e) => e.preventDefault()}>
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
              <button
                className="btn btn-success ml-auto my-2 my-sm-0"
                onClick={() => Meteor.logout()}
              >Logout</button>
            </div>
          </div>
        </nav>
        <div className="navbar-expand-md navbar-light bg-light heading">
          <div className="container">
            <h3 className="nav-head">Dashboard</h3>
            <ul className="nav" style={{ justifyContent: "space-between" }}>
              <div className="nav">
                <li className="nav-li">
                  <a
                    className={`nav-btn ${currentlyShowing === 'add' ? 'active' : ''}`}
                    href="#"
                    onClick={() => this.switchTab('add')}
                  >Add a Property</a>
                </li>
                <li className="nav-li">
                  <a
                    className={`nav-btn ${currentlyShowing === 'my' ? 'active' : ''}`}
                    href="#"
                    onClick={() => this.switchTab('my')}
                  >My Properties</a>
                </li>
                <li className="nav-li">
                  <a
                    className={`nav-btn ${currentlyShowing === 'explore' ? 'active' : ''}`}
                    href="#"
                    onClick={() => this.switchTab('explore')}
                  >Explore</a>
                </li>
              </div>
              <div>
                <li className="nav-li">
                  <a
                    className="nav-btn"
                    href="#"
                  >{email.slice(0, email.indexOf('@'))}</a>
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div className="navbar-expand-md container switcher">
          {currentlyShowing === 'add' && <AddProperty />}
          {currentlyShowing === 'my' && <MyProperties />}
          {currentlyShowing === 'explore' && <ExploreProperties />}
        </div>
      </div>
    )
  }
}

export default Homepage