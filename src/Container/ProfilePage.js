import React, { Component } from "react";
import Student from "../assets/images/student.jpg";

import { Profiles } from "../components/Profile.js";
import { BiDollar } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";
import { GoMortarBoard } from "react-icons/go";
import { AiFillFileText } from "react-icons/ai";

export class ProfilePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let profileImfo = [
      {
        profileImage: Student,
        price: <BiDollar fill="gold" />,
        session: <MdDateRange />,
        EducationIcon: <GoMortarBoard fill="blue" />,
        Qualification: "degree",
        experienceIcon: <AiFillFileText fill="green" />,
        experience: "2 years",

        ShortNote: "author is very fluent in english etc",

        AboutContent:
          "i have been loved maths, and any thing maths ralated. I have been tutoring for over a year now and as an undergraduate student myself I undersatand how hard it can be for people to learn and how useful using modern techniques to teaches is. i teach maths but i also teach gcse science and some computer science ",
      },
    ];
    return (
      <div>
        {profileImfo.map((profile) => {
          const {
            profileImage,
            price,
            session,
            Qualification,
            experience,
            EducationIcon,
            experienceIcon,
            ShortNote,
            AboutContent,
          } = {
            ...profile,
          };
          return (
            <Profiles
              image={profileImage}
              price={price}
              session={session}
              qualification={Qualification}
              experience={experience}
              EducationIcon={EducationIcon}
              experienceIcon={experienceIcon}
              ShortNote={ShortNote}
              AboutContent={AboutContent}
            />
          );
        })}
      </div>
    );
  }
}

export default ProfilePage;
