import React, { Component } from "react";
import { CommonButton } from "../styles";

export class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <CommonButton.ButtonStyle>
          {this.props.buttonName}
        </CommonButton.ButtonStyle>
      </div>
    );
  }
}

export default Button;
