import { Meteor } from 'meteor/meteor';
import Properties from '../imports/api/properties/properties';
import '../imports/api/properties/methods';
require('../imports/api/properties/server/publications');

Meteor.startup(() => {});