import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import Properties from '../api/properties/properties'
import Property from './Property';
import Loading from './Loading';

class ExploreProperties extends Component {
  
  componentWillUnmount() {
    if (this.props.handle) this.props.handle.stop();
  }

  render() {
    const {properties} = this.props;
    const propertiesToRender = properties.map(prop => (
      <Property details={prop} key={prop._id} />
    ))

    const noProperty = (
      <div className="col-12 mt-4">
        <h4>No property here...</h4>
      </div>
    )

    return (
      <div className="container">
        <div className="row">
          <p className="col-12">Browse properties</p>
        </div>
        <div className="row">
          {properties.length ? propertiesToRender : noProperty}
        </div>
      </div>
    )
  }
}

export default withTracker(() => {
  const handle = Meteor.subscribe('properties.public')
  return {
    handle,
    properties: Properties.find({}).fetch()
  };
})(ExploreProperties);