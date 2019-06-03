import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Accounts } from 'meteor/accounts-base';

import '/imports/ui/styles/bootstrap.min.css';

import Properties from '/imports/api/properties/properties';
import App from '/imports/ui/App.jsx';

const AppContainer = withTracker(() => {
  return {
    user: Meteor.user(),
    connected: Meteor.status().connected
  };
})(App);

export default AppContainer;
