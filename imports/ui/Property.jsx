import React, {Component} from "react";
import { Meteor } from 'meteor/meteor';
import Modal from './Modal';
import Thumbnail1 from './images/thumb.jpg';
import Thumbnail2 from './images/thumb-2.jpg';
import Thumbnail3 from './images/thumb-3.jpg';

const thumbnails = [Thumbnail1, Thumbnail2, Thumbnail3];

class Property extends Component {

  state = {}

  handleClick = () => {
    if (this.props.details.ownerId === Meteor.userId()) {
      this.setState(() => ({
        showModal: true
      }))
    }
  }

  handleCloseModal = () => {
    this.setState(() => ({
      showModal: false
    }))
  }

  render() {
    const {details} = this.props;
    const choice = Number((Math.random() * (thumbnails.length - 1)).toFixed(0));
    return (
      <>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
          <div
            className="property flip-card"
            onClick={this.handleClick}
            title={details.ownerId === Meteor.userId() ? 'Click to edit' : "You can't edit this."}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="property-thumbnail">
                  <img src={thumbnails[choice]} alt="Property"/>
                </div>
                <div className="property-content">
                  <span>{details.name}</span>
                </div>
                <div className="property-value">
                  <span className="text-muted">Valued at: ${details.amount}</span>
                </div>
              </div>
              <div className="flip-card-back">
                <div className="property-thumbnail">
                  <img src={thumbnails[choice]} alt="Property"/>
                </div>
                <div className="property-content">
                  <span>Located at: {details.location}</span>
                </div>
                <div className="property-value">
                  <span className="text-muted">{details.name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal
          open={this.state.showModal}
          details={details}
          Logo={thumbnails[choice]}
          closeModal={this.handleCloseModal}
        />
      </>
    )
  }
}

export default Property;
