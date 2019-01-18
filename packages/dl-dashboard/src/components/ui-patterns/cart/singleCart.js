import React, { Component } from 'react';
import InputNumber from '../uielements/InputNumber';
import { createNotification as notification } from 'components/ui-elements/feedback/notification';

export default class extends Component {
  onChange = (value) => {
    if (!isNaN(value)) {
      if (value !== this.props.quantity) {
        this.props.changeQuantity(this.props.objectID, value);
      }
    } else {
      notification('error', 'Please give valid number');
    }
  };

  render() {
    const {
      price, quantity, image, objectID, cancelQuantity, _highlightResult,
    } = this.props;
    const totalPrice = (price * quantity).toFixed(2);
    return (
      <tr>
        <td
          className="dlItemRemove"
          onClick={() => {
            cancelQuantity(objectID);
          }}
        >
          <a href="# ">
            <i className="ion-android-close" />
          </a>
        </td>
        <td className="dlItemImage">
          <img alt="#" src={image} />
        </td>
        <td className="dlItemName">
          <h3>{_highlightResult.name.value}</h3>
          <p>{_highlightResult.description.value}</p>
        </td>
        <td className="dlItemPrice">
          <span className="itemPricePrefix">$</span>
          {price.toFixed(2)}
        </td>
        <td className="dlItemQuantity">
          <InputNumber min={1} max={1000} value={quantity} step={1} onChange={this.onChange} />
        </td>
        <td className="dlItemPriceTotal">${totalPrice}</td>
      </tr>
    );
  }
}
