import React, { Component } from "react";
import { Profile } from "../styles";
import { Button } from "../Container/index.js";
import DropDown from "../Container/dropDown.js";
import Teacher from "../assets/images/teacher.jpg";

export class Profiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  render() {
    let lists = [
      {
        name: "subject",
        list1: "mathematics",
        list2: "network analysis",
        list3: "engineering electro magnentics",
      },
      {
        name: "education",

        list2: "puc",
        list3: "sslc",
      },
      {
        name: "Availabilities",
        list1: "Wrok from home",

        list3: "developmenet",
      },
    ];
    let {
      image,
      price,
      session,
      qualification,
      experience,
      EducationIcon,
      experienceIcon,
      ShortNote,
      AboutContent,
    } = {
      ...this.props,
    };
    return (
      <div>
        <Profile.ProfileContainer>
          <Profile.Profilewrapper>
            <Profile.ProfileImageWrapper
              style={{ backgroundImage: `url(${Teacher})` }}
            >
              <Profile.ProfileImage src={image}></Profile.ProfileImage>
            </Profile.ProfileImageWrapper>

            <Profile.PriceSessionWrapper>
              <Profile.PriceWrapper>
                <Profile.Icon>{price}</Profile.Icon>
                <Profile.Price> 20</Profile.Price>
              </Profile.PriceWrapper>

              <Profile.SessionWrapper>
                <Profile.Icon>{session}</Profile.Icon>
                <Profile.Session>
                  <span className="text-5xl">37</span> booked
                </Profile.Session>
              </Profile.SessionWrapper>
            </Profile.PriceSessionWrapper>

            <Profile.QuickReview>
              <Profile.Education>
                <Profile.Icon>{EducationIcon}</Profile.Icon>
                <Profile.Qualification>{qualification}</Profile.Qualification>
              </Profile.Education>

              <Profile.Experience>
                <Profile.Icon>{experienceIcon}</Profile.Icon>
                <Profile.NumberofYear>{experience}</Profile.NumberofYear>
              </Profile.Experience>
            </Profile.QuickReview>
          </Profile.Profilewrapper>

          <Profile.AboutAuthor>
            <Profile.Heading>ABOUT AUTHOR</Profile.Heading>
            <Profile.AboutShortWrapper>
              <Profile.AboutShort>{ShortNote}</Profile.AboutShort>
            </Profile.AboutShortWrapper>

            <Profile.AboutWrapper>
              <Profile.AboutHead>About</Profile.AboutHead>
              <Profile.AboutContent>{AboutContent}</Profile.AboutContent>
            </Profile.AboutWrapper>

            <Profile.ButtonWrapper>
              <Button buttonName="BOOK ME!" />
            </Profile.ButtonWrapper>

            <Profile.dropDownWrapper>
              {lists.map((list) => {
                return (
                  <DropDown
                    name={list.name}
                    list1={list.list1}
                    list2={list.list2}
                    list3={list.list3}
                  />
                );
              })}
            </Profile.dropDownWrapper>
          </Profile.AboutAuthor>
        </Profile.ProfileContainer>
      </div>
    );
  }
}

export default Profiles;

{
  /* <div class="rounded rounded-t-lg overflow-hidden shadow max-w-xs my-3">
  	<img src="https://i.imgur.com/dYcYQ7E.png" class="w-full" />
    <div class="flex justify-center -mt-8">
        <img src="https://i.imgur.com/8Km9tLL.jpg" class="rounded-full border-solid border-white border-2 -mt-3">		
    </div>
	<div class="text-center px-3 pb-6 pt-2">
		<h3 class="text-black text-sm bold font-sans">Olivia Dunham</h3>
		<p class="mt-2 font-sans font-light text-grey-dark">Hello, i'm from another the other side!</p>
	</div>
  	<div class="flex justify-center pb-3 text-grey-dark">
      <div class="text-center mr-3 border-r pr-3">
        <h2>34</h2>
        <span>Photos</span>
      </div>
      <div class="text-center">
        <h2>42</h2>
        <span>Friends</span>
      </div>
  	</div>
</div>  */
}
