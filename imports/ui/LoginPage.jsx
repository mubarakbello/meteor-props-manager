import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Accounts from 'meteor/accounts-base';

import Logo from './images/images.png';

class LoginPage extends Component {
  state = {}

  handleSubmit = (e) => {
    e.preventDefault();
    const email = this.email.value;
    const password = this.password.value;
    Meteor.loginWithPassword(email, password, (err) => {
      if (err) {
        alert(`There is an error while attempting to login: ${err.reason}`);
      } else {
        console.log('Logged in successfully');
        this.setState(() => ({
          redirect: '/'
        }));
      }
    });
  }

  render() {
    return this.state.redirect
    ? <Redirect to={this.state.redirect} />
    : (
      <div className="Login-page">
        <div className="banner-text order-md-2 fade-out-element">
          <div>
            <img src={Logo} alt="Brand"/>
            <h1>Yalox</h1>
            <p>Manage your real-estate properties in one touch!</p>
          </div>
        </div>
        <div className="login-form order-md-1 fade-in-element">
          <div className="form">
            <h3 className="text-center" style={{color: '#125266'}}>Hey! Good to see you again!</h3>
            <div className="text-center" style={{marginTop: '-5px', marginBottom: '15px'}}>
              <small style={{color: '#125266', fontSize: 'large'}}>Log in to continue</small>
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="form-label-group">
                <input
                  type="email" autoFocus
                  className="form-control"
                  id="email" required
                  placeholder='Email address'
                  aria-describedby="emailHelp"
                  ref={(c) => {this.email = c}}
                  autoComplete="email"
                />
                <label htmlFor="email" style={{color: '#125266'}}>Email address</label>
              </div>
              <div className="form-label-group">
                <input
                  type="password"
                  className="form-control"
                  id="password" required
                  placeholder="Password"
                  ref={(c) => {this.password = c}}
                  autoComplete="current-password"
                />
                <label htmlFor="password" style={{color: '#125266'}}>Password</label>
              </div>
              <button type="submit" className="btn w-100 btn-primary">Log in</button>
            </form>
          </div>
          <div className="signup-option">
            <span>New here? <Link to="/signup">Sign up</Link> now!</span>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginPage