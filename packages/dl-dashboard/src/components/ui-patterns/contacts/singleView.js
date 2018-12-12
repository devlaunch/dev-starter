import React, { Component } from "react";
import { ContactCardWrapper } from "./contactCard.style";

export default class extends Component {
  render() {
    const { contact, otherAttributes } = this.props;
    const name = contact.name ? contact.name : "No Name";
    const extraInfos = [];
    otherAttributes.forEach(attribute => {
      const value = contact[attribute.value];
      if (value) {
        extraInfos.push(
          <div className="dlContactCardInfos" key={attribute.value}>
            <p className="dlInfoLabel">{`${attribute.title}`}</p>
            <p className="dlInfoDetails">{value}</p>
          </div>
        );
      }
    });
    return (
      <ContactCardWrapper className="dlContactCard">
        <div className="dlContactCardHead">
          <div className="dlPersonImage">
            {contact.avatar ? <img alt="#" src={contact.avatar} /> : ""}
          </div>
          <h1 className="dlPersonName">{name}</h1>
        </div>
        <div className="dlContactInfoWrapper">{extraInfos}</div>
      </ContactCardWrapper>
    );
  }
}
