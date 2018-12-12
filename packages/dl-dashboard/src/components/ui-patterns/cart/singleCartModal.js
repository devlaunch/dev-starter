import React, { Component } from "react";
import { notification } from "../index";
import TopbarCartWrapper from "./singleCartModal.style";

export default class extends Component {
  onChange = value => {
    if (!isNaN(value)) {
      if (value !== this.props.quantity) {
        this.props.changeQuantity(this.props.objectID, value);
      }
    } else {
      notification("error", "Please give valid number");
    }
  };

  render() {
    const {
      price,
      quantity,
      image,
      objectID,
      cancelQuantity,
      _highlightResult
    } = this.props;
    return (
      <TopbarCartWrapper className="dlCartItems">
        <div className="dlItemImage">
          <img alt="#" src={image} />
        </div>
        <div className="dlCartDetails">
          <h3>
            <a href="#!">{_highlightResult.name.value}</a>
          </h3>
          <p className="dlItemPriceQuantity">
            <span>$</span>
            <span>{price.toFixed(2)}</span>
            <span className="itemMultiplier">X</span>
            <span className="dlItemQuantity">{quantity}</span>
          </p>
        </div>
        <a
          className="dlItemRemove"
          onClick={() => cancelQuantity(objectID)}
          href="#!"
        >
          <i className="ion-android-close" />
        </a>
      </TopbarCartWrapper>
    );
  }
}
