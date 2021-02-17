import React, { Component } from "react";
import { CardStyles } from "../styles";
import { Button } from "./index.js";
import tw from "twin.macro";
import { Link, Router } from "react-router-dom";

export class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {
      Backgrounimage,
      ConnectionMessage,
      ConnectionImage,
      Profileimage,
      id,
      role,
      name,
      connected,
    } = { ...this.props };
    return (
      <div>
        <CardStyles.ContainerWrapper>
          <CardStyles.CardContainer
            key={id}
            style={{ backgroundImage: `url(${Backgrounimage})` }}
          >
            <CardStyles.ImageWrapper>
              <CardStyles.ProfileImage
                src={Profileimage}
              ></CardStyles.ProfileImage>
            </CardStyles.ImageWrapper>

            <CardStyles.ContentWrapper>
              <CardStyles.Name>
                <Link to="/profile">{name}</Link>
              </CardStyles.Name>
              <CardStyles.Role>
                <p>{role}</p>
              </CardStyles.Role>
            </CardStyles.ContentWrapper>

            {connected ? (
              <div>
                <CardStyles.Connectionwrapper>
                  <CardStyles.ConnectionContent>
                    <CardStyles.ConnectionImage
                      src={ConnectionImage}
                    ></CardStyles.ConnectionImage>
                    <CardStyles.ConnectionMessage>
                      {ConnectionMessage}
                    </CardStyles.ConnectionMessage>
                  </CardStyles.ConnectionContent>
                </CardStyles.Connectionwrapper>
                <CardStyles.ButtonWrapper1>
                  <Button buttonName="Connect" />
                </CardStyles.ButtonWrapper1>
              </div>
            ) : (
              <CardStyles.ButtonWrapper2>
                <Button buttonName="Connect" />
              </CardStyles.ButtonWrapper2>
            )}
          </CardStyles.CardContainer>
        </CardStyles.ContainerWrapper>
      </div>
    );
  }
}

export default Card;
