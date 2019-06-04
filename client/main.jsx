import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import App from '../imports/ui/AppContainer';
// import Properties from '/imports/api/properties/properties';

Meteor.startup(() => {
  render(<App />, document.getElementById('react-target'));
});
