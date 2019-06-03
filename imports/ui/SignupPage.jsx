import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';

import Logo from '/imports/ui/images/images.png';

class SignupPage extends Component {
  state = {}

  handleSubmit = (e) => {
    e.preventDefault();
    const email = this.email.value;
    const password = this.password.value;
    const confirmPassword = this.confirmPassword.value;
    console.log(email, password);
    if (password === confirmPassword) {
      console.log(Accounts);
      Accounts.createUser({
        email,
        password
      }, (err) => {
        if (err) {
          alert(`There is an error: ${err.reason}`);
        } else {
          console.log('User added successfully');
          this.setState(() => ({
            redirect: '/'
          }));
        }
      })
    } else {
      alert('Passwords do not match!');
    }
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
            <h3 className="text-center" style={{color: '#125266'}}>Hey! Nice to have you here</h3>
            <div className="text-center" style={{marginTop: '-5px', marginBottom: '15px'}}>
              <small style={{color: '#125266', fontSize: 'large'}}>Sign up now</small>
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
                />
                <label htmlFor="password" style={{color: '#125266'}}>Password</label>
              </div>
              <div className="form-label-group">
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword" required
                  placeholder="Confirm Password"
                  ref={(c) => {this.confirmPassword = c}}
                />
                <label htmlFor="confirmPassword" style={{color: '#125266'}}>Confirm Password</label>
              </div>
              <button type="submit" className="btn w-100 btn-primary">Sign up</button>
            </form>
          </div>
          <div className="signup-option">
            <span>You have an account? <Link to="/login">Log in</Link> now!</span>
          </div>
        </div>
      </div>
    )
  }
}

export default SignupPage