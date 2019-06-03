import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import {updateFields, removeProperty} from '../api/properties/methods'

class Modal extends Component {

  state = {
    isEditing: false
  }

  handleEdit = () => {
    this.setState((prevState) => ({
      isEditing: !prevState.isEditing
    }))
  }

  handleUpdate = (e) => {
    e.preventDefault();
    const name = this.name.value;
    const location = this.location.value;
    const amount = this.amount.value;
    updateFields.call({
      name,
      location,
      amount,
      propertyId: this.props.details._id,
      ownerId: Meteor.userId()
    }, (err, res) => {
      if (err) {
        alert(`Error ${err.error} occurred due to: ${err.reason}, res: ${res}`);
        throw err;
      } else {
        console.log(`Property updated successfully ${res}`);
        this.handleEdit();
      }
    })
  }

  handleDelete = () => {
    removeProperty.call({
      propertyId: this.props.details._id,
      ownerId: Meteor.userId()
    }, (err, res) => {
      if (err) {
        alert(`Error ${err.error} occurred due to: ${err.reason}, res: ${res}`);
        throw err;
      } else {
        console.log(`Property removed successfully ${res}`);
      }
    });
  }

  checkClose = (e) => {
    let p = e.target;
    while(p) {
      if(p.id) {
          if(p.id == 'mymodal') {
              return;
          }
      }
      p = p.parentElement;
    }
    this.props.closeModal();
  }

  render() {
    const {details, open, Logo} = this.props;
    const {isEditing} = this.state;
    return (
      <div
        className={`property-details-modal ${open ? 'modal-open' : ''}`}
        onClick={this.checkClose}
      >
        <div className="property-details-modal__body" id="mymodal">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-md-6" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="aside">
                  <div className="thumbnail">
                    <img src={Logo} alt="Property"/>
                  </div>
                  <div className="buttons">
                    <button
                      className="btn btn-info mr-2"
                      disabled={isEditing}
                      onClick={this.handleEdit}
                    >Edit Details</button>
                    <button
                      className="btn btn-outline-danger"
                      onClick={this.handleDelete}
                    >Delete</button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <form onSubmit={this.handleUpdate}>
                  <div className="form-group">
                    <label htmlFor="property-name">Property Name</label>
                    <input
                      type="text"
                      id="property-name"
                      className="form-control"
                      rows="1"
                      defaultValue={details.name}
                      ref={(c) => this.name = c}
                      required
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="property-location">Location</label>
                    <textarea
                      name="property-location"
                      id="property-location"
                      className="form-control"
                      rows="2"
                      defaultValue={details.location}
                      ref={(c) => this.location = c}
                      required
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="property-amount">Amount</label>
                    <input
                      type="number"
                      id="property-amount"
                      className="form-control"
                      rows="1"
                      defaultValue={details.amount}
                      ref={(c) => this.amount = c}
                      required
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="float-right">
                    {this.props.nameSavedBefore && <button type="button" className="btn btn-cancel mr-2" onClick={this.handleCancel}>Cancel</button>}
                    <button
                      type="submit"
                      className="btn btn-info"
                      style={{ display: (isEditing ? 'unset' : 'none') }}
                    >Update</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal