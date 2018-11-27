import React, { Component } from "react";
import { Icon } from "antd";
import { Textarea as Input } from "./uielements/input";

export default class EditableComponent extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.check = this.check.bind(this);
    this.edit = this.edit.bind(this);
    this.state = {
      value: this.props.value,
      editable: false
    };
  }
  handleChange(event) {
    const value = event.target.value;
    this.setState({ value });
  }
  check() {
    this.setState({ editable: false });
    if (this.props.onChange) {
      this.props.onChange(this.props.itemKey, this.state.value);
    }
  }
  edit() {
    this.setState({ editable: true });
  }

  render() {
    const { value, editable } = this.state;
    return (
      <div className="dlNoteContent">
        {editable ? (
          <div className="dlNoteEditWrapper">
            <Input
              rows={3}
              value={value}
              onChange={this.handleChange}
              onPressEnter={this.check}
            />
            <Icon
              type="check"
              className="dlNoteEditIcon"
              onClick={this.check}
            />
          </div>
        ) : (
          <p className="dlNoteTextWrapper" onClick={this.edit}>
            {value || " "}
            <Icon type="edit" className="dlNoteEditIcon" />
          </p>
        )}
      </div>
    );
  }
}
