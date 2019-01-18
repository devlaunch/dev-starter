import React, { Component } from 'react';
import Popconfirm from '../feedback/popconfirm';
import Button from '../uielements/button';
import { createNotification as notification } from 'components/ui-elements/feedback/notification';

export default class extends Component {
  render() {
    const { contact, deleteContact } = this.props;
    let name = '';
    if (contact.firstName) {
      name = `${contact.firstName} `;
    }
    if (contact.lastName) {
      name = `${name}${contact.lastName}`;
    }
    if (!name) {
      name = 'No Name';
    }
    return (
      <Popconfirm
        title={`Sure to delete ${name}?`}
        okText="DELETE"
        cancelText="No"
        onConfirm={() => {
          notification('error', `${name} Deleted`, '');
          deleteContact(contact.id);
        }}
      >
        <Button icon="close" type="button" className="dlDeleteBtn" />
      </Popconfirm>
    );
  }
}
