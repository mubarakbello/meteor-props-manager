/* eslint-disable prefer-arrow-callback */

import { Meteor } from 'meteor/meteor';

import Properties from '../properties';

Meteor.publish('properties.public', function() {
  return Properties.find({});
});

Meteor.publish('properties.private', function() {
  if (!this.userId) {
    return this.ready();
  }

  return Properties.find({
    ownerId: this.userId,
  });
});
