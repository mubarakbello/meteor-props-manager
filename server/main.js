import { Meteor } from 'meteor/meteor';
// import Links from '/imports/api/links';
import Properties from '/imports/api/properties/properties';
import '/imports/api/properties/methods';
require('/imports/api/properties/server/publications');

// function insertLink(title, url) {
//   Properties.insert({ title, url, createdAt: new Date() });
// }

// Meteor.startup(() => {
//   // If the Links collection is empty, add some data.
//   if (Properties.find().count() === 0) {
//     insertLink(
//       'Do the Tutorial',
//       'https://www.meteor.com/tutorials/react/creating-an-app'
//     );

//     insertLink(
//       'Follow the Guide',
//       'http://guide.meteor.com'
//     );

//     insertLink(
//       'Read the Docs',
//       'https://docs.meteor.com'
//     );

//     insertLink(
//       'Discussions',
//       'https://forums.meteor.com'
//     );
//   }
// });

Meteor.startup(() => {});