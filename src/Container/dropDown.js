import React, { Component } from "react";
import { Profile } from "../styles";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  showList = () => {
    return this.setState({ show: !this.state.show });
  };
  render() {
    let { name, list1, list2, list3 } = { ...this.props };
    return (
      <div>
        <Profile.dropHeadContainer>
          <Profile.dropDownlist onClick={() => this.showList()}>
            <Profile.head>{name}</Profile.head>
            {this.state.show ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </Profile.dropDownlist>
          {this.state.show && (
            <Profile.lists>
              <Profile.UList>
                <Profile.List>{list1}</Profile.List>
                <Profile.List>{list2}</Profile.List>
                <Profile.List>{list3}</Profile.List>
              </Profile.UList>
            </Profile.lists>
          )}
        </Profile.dropHeadContainer>
      </div>
    );
  }
}

export default DropDown;
