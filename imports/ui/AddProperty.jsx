import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
// import { insertProperty } from '/imports/api/properties/methods';
import {insertProperty} from '../api/properties/methods'

class AddProperty extends Component {
  state = {}

  handleSubmit = (e) => {
    e.preventDefault();
    const name = this.name.value;
    const location = this.location.value;
    const amount = this.amount.value;
    console.log(name, location, typeof amount, Meteor.userId());
    insertProperty.call({
      name,
      location,
      amount,
      ownerId: Meteor.userId()
    }, (err, res) => {
      if (err) {
        alert(`Error ${err.error} occurred due to: ${err.reason}, res: ${res}`);
        throw err;
      } else {
        alert(`Property added successfully`);
        this.name.value = '';
        this.location.value = '';
        this.amount.value = '';
      }
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row mt-4 mb-3">
          <h3 className="col-12"> Enter the property details here</h3>
        </div>
        <div className="row">
          <div className="col-md-5 col-12 col-sm-8">
            <div className="form">
              <form onSubmit={this.handleSubmit}>
                <div className="form-label-group">
                  <input
                    type="text" autoFocus
                    className="form-control"
                    id="name" required
                    placeholder='Property name'
                    ref={(c) => {this.name = c}}
                  />
                  <label htmlFor="name" style={{color: '#125266'}}>Property name</label>
                </div>
                <div className="form-label-group">
                  <input
                    type="text"
                    className="form-control"
                    id="location" required
                    placeholder="Property location"
                    ref={(c) => {this.location = c}}
                  />
                  <label htmlFor="location" style={{color: '#125266'}}>Property location</label>
                </div>
                <div className="form-label-group">
                  <input
                    type="number"
                    className="form-control"
                    id="amount" required
                    placeholder="Property amount"
                    ref={(c) => {this.amount = c}}
                  />
                  <label htmlFor="amount" style={{color: '#125266'}}>Property amount</label>
                </div>
                <button type="submit" className="btn w-100 btn-info mt-4">Add Property</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddProperty

// import React, { Component } from 'react';
// import { Link, Redirect } from 'react-router-dom';
// import Accounts from 'meteor/accounts-base';
