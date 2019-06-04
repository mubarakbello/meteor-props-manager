import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Properties from './properties';


export const insertProperty = new ValidatedMethod({
  name: 'properties.insert',

  validate: new SimpleSchema({
    name: { type: String },
    location: { type: String },
    amount: { type: String },
    ownerId: { type: String, regEx: SimpleSchema.RegEx.Id }
  }).validator(),

  run({ name, location, amount, ownerId }) {
    Properties.insert({
      name,
      location,
      amount,
      ownerId,
      createdAt: new Date()
    });
  },
});

export const updateFields = new ValidatedMethod({
  name: 'properties.updateFields',

  validate: new SimpleSchema({
    propertyId: { type: String },
    name: { type: String },
    location: { type: String },
    amount: { type: String },
    ownerId: { type: String }
  }).validator(),

  run({ propertyId, name, location, amount, ownerId }) {
    const property = Properties.findOne({_id: propertyId});
    // if (!property.isModifiable()) {
      // throw new Meteor.Error('properties.updateFields.unauthorized',
      //   'You cannot edit the details of a property that is not yours');
    // }
    if (property.ownerId !== ownerId) {
      throw new Meteor.Error('properties.updateFields.unauthorized',
        'You cannot edit the details of a property that is not yours');
    }
    Properties.update({_id: propertyId}, {
      $set: { name, location, amount, ownerId }
    });
  },
});

export const removeProperty = new ValidatedMethod({
  name: 'properties.remove',

  validate: new SimpleSchema({
    propertyId: { type: String },
    ownerId: { type: String }
  }).validator(),

  run({ propertyId, ownerId }) {
    const property = Properties.findOne({_id: propertyId});
    // if (!property.isModifiable()) {
    //   throw new Meteor.Error(
    //     'properties.remove.accessDenied',
    //     'You cannot remove a property that is not yours',
    //   );
    // }
    if (property.ownerId !== ownerId) {
      throw new Meteor.Error(
        'properties.remove.accessDenied',
        'You cannot remove a property that is not yours',
      );
    }

    Properties.remove({_id: propertyId});
  },
});
