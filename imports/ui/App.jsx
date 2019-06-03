import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Meteor } from 'meteor/meteor';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import Homepage from './Homepage';
import NotFoundPage from './NotFoundPage';
import Loading from './Loading';

class App extends Component {
  render() {
    return !this.props.connected
    ? <Loading />
    : (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              exact path="/login"
              render={() => <LoginPage />}
            />
            <Route
              exact path="/signup"
              render={() => <SignupPage />}
            />
            <Route
              exact path="/"
              render={props => Meteor.user()
                ? <Homepage {...props} />
                : <Redirect to='/login' />
              }
            />
            <Route
              path="/*"
              render={() => <NotFoundPage />}
            />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
