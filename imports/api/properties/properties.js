import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

class PropertiesCollection extends Mongo.Collection {

  insert(doc, callback) {
    const ourDoc = doc;
    ourDoc.createdAt = ourDoc.createdAt || new Date();
    return super.insert(ourDoc, callback);
  }

  update(selector, modifier) {
    return super.update(selector, modifier);
  }

  remove(selector) {
    return super.remove(selector);
  }
}

export default Properties = new PropertiesCollection('properties');

Properties.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

Properties.schema = new SimpleSchema({
  name: {
    type: String
  },
  location: {
    type: String
  },
  amount: {
    type: String
  },
  ownerId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  }
});

// Properties.attachSchema(Properties.schema);

// Properties.helpers({
//   isModifiable() {
//     return this.ownerId === Meteor.userId();
//   }
// });