import React, { Component } from "react";
import Card from "./Card.js";
import Student from "../assets/images/student.jpg";
import Teacher from "../assets/images/teacher.jpg";
import TopBackground from "../assets/images/background.jpg";
import Connection from "../assets/images/connection.png";
import "../index.css";
import { CardStyles } from "../styles";
import { Link, Route, Switch, Redirect } from "react-router-dom";

export class Cards extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const CardArray = [
      {
        id: 1,
        Backgrounimage: TopBackground,
        Profileimage: Student,
        name: "Student",
        role: "MDkahdfkdfkjaf  jkasg",
        ConnectionImage: Connection,
        ConnectionMessage: "4 shared connection",
        connected: false,
      },
      {
        id: 2,
        Backgrounimage: TopBackground,
        Profileimage: Teacher,
        name: "Student",
        role:
          "global Merchandising & Development manager en H&M global Merchandising & Development manager en H&M",
        ConnectionImage: Connection,
        ConnectionMessage: "4 shared connection",
        connected: true,
      },
      {
        id: 3,
        Backgrounimage: TopBackground,
        Profileimage: Student,
        name: "Student",
        role: "MDkahdfkdfkjaf  jkasg",
        ConnectionImage: Connection,
        ConnectionMessage: "4 shared connection",
        connected: false,
      },
      {
        id: 4,
        Backgrounimage: TopBackground,
        Profileimage: Teacher,
        name: "Student",
        role: "HR",
        ConnectionImage: Connection,
        ConnectionMessage: "4 shared connection",
        connected: true,
      },
      {
        id: 5,
        Backgrounimage: TopBackground,
        Profileimage: Student,
        name: "Student",
        role: "MDkahdfkdfkjaf  jkasg",
        ConnectionImage: Connection,
        ConnectionMessage: "4 shared connection",
        connected: false,
      },
    ];
    return (
      <div>
        <CardStyles.Container>
          {CardArray.map((Cards) => {
            return (
              <Card
                key={Cards.id}
                Backgrounimage={Cards.Backgrounimage}
                Profileimage={Cards.Profileimage}
                name={Cards.name}
                role={Cards.role}
                ConnectionImage={Cards.ConnectionImage}
                ConnectionMessage={Cards.ConnectionMessage}
                connected={Cards.connected}
              />
            );
          })}
        </CardStyles.Container>
      </div>
    );
  }
}

export default Cards;
