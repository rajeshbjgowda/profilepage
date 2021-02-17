import styled from "styled-components";
import tw from "twin.macro";

const ProfileContainer = styled.div`
  overflow: hidden;

  ${tw` w-auto flex h-auto container mx-auto space-x-2`};
`;

const Profilewrapper = styled.div`
  ${tw`w-2/4 border-2`}
`;
const ProfileImageWrapper = styled.div`
  background-size: 100% 70%;
  background-repeat: no-repeat;
  ${tw`w-full`}
`;
const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  ${tw`mr-auto ml-auto rounded-full`}
`;

const PriceSessionWrapper = styled.div`
  height: 100px;
  background-color: gray;

  ${tw`w-3/4 mr-auto ml-auto space-x-1  border-2 justify-between flex mt-20 `}
`;

const PriceWrapper = styled.div`
  ${tw` animate-pulse transition duration-500 ease-in-out  flex justify-center items-center w-1/2  hover:bg-indigo-300 space-x-1 `};
`;
const Price = styled.div`
  ${tw`  text-5xl `};
`;
const SessionWrapper = styled.div`
  ${tw` flex transition duration-500 ease-in-out  justify-center items-center w-1/2 hover:bg-indigo-300 space-x-1  `}
`;
const Session = styled.div`
  ${tw``}
`;

const QuickReview = styled.div`
  ${tw` max-w-1/2 rounded mx-auto bg-red-100 mt-6`}
`;
const Icon = styled.div`
  font-size: 30px;
  ${tw``}
`;

const Education = styled.div`
  ${tw`w-full  p-5 hover:bg-red-500 transition duration-500 ease-in-out hover:animate-pulse flex justify-center items-center space-x-2`}
`;
const Qualification = styled.div`
  ${tw``}
`;

const Experience = styled.div`
  ${tw`flex w-full p-5 hover:bg-red-500 transition duration-500 ease-in-out hover:animate-pulse justify-center items-center space-x-2`}
`;
const NumberofYear = styled.div`
  ${tw``}
`;

const AboutAuthor = styled.div`
  ${tw`bg-purple-400 w-2/4`}
`;

const Heading = styled.h1`
  ${tw`text-2xl`}
`;

const AboutShortWrapper = styled.div`
  ${tw`border w-full bg-green-200 my-2`}
`;

const AboutShort = styled.div`
  min-height: 60px;
  ${tw`p-5  `}
`;

const AboutWrapper = styled.div`
  ${tw`border-gray-500 my-5 mx-1 bg-white rounded p-2`}
`;

const AboutHead = styled.h1`
  ${tw`text-2xl my-4 text-justify`}
`;

const AboutContent = styled.div`
  ${tw`text-left`}
`;
const ButtonWrapper = styled.div`
  ${tw` m-5`}
`;

const dropDownWrapper = styled.div`
  ${tw` space-y-2 p-5`}
`;
const dropHeadContainer = styled.div`
  ${tw`bg-blue-500 py-2 text-center `}
`;

const dropDownlist = styled.div`
  ${tw`flex justify-between   rounded 
  
  `}
`;

const head = styled.div`
  ${tw`text-white w-full`}
`;

const lists = styled.p`
  ${tw``}
`;
const UList = styled.ul`
  ${tw``}
`;
const List = styled.li`
  ${tw``}
`;

export {
  ProfileContainer,
  Profilewrapper,
  ProfileImageWrapper,
  ProfileImage,
  PriceSessionWrapper,
  PriceWrapper,
  Price,
  SessionWrapper,
  Session,
  QuickReview,
  Icon,
  Education,
  Qualification,
  Experience,
  NumberofYear,
  AboutAuthor,
  Heading,
  AboutShortWrapper,
  AboutShort,
  AboutWrapper,
  AboutHead,
  AboutContent,
  ButtonWrapper,
  dropDownWrapper,
  dropDownlist,
  lists,
  head,
  dropHeadContainer,
  UList,
  List,
};
