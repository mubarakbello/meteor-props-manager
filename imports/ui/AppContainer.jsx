import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import './styles/bootstrap.min.css';
import App from './App.jsx';

const AppContainer = withTracker(() => {
  return {
    user: Meteor.user(),
    connected: Meteor.status().connected
  };
})(App);

export default AppContainer;
