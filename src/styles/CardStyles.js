import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  flex: 0 0 33.333333%;

  ${tw`flex flex-col flex-wrap sm:flex sm:flex-row sm:mr-auto
      sm:ml-auto sm:w-full mr-auto ml-auto container`}
`;

const ContainerWrapper = styled.div`
  ${tw`flex  `}
`;

const CardContainer = styled.div`
  background-size: 100% 30%;
  background-repeat: no-repeat;
  ${tw`bg-gray-100 rounded border rounded-md w-96 shadow-none relative mx-auto transform hover:-translate-y-1 transition-transform duration-500  hover:shadow-lg m-5 `};
`;

const ImageWrapper = styled.div`
  border: none;
  ${tw`w-full`}
`;

const BackImage = styled.img`
  width: 100%;
  ${tw`max-h-20 w-full  absolute top-0`}
`;

const ProfileImage = styled.img`
  ${tw`w-24 h-24 ml-auto mr-auto mt-4 bg-white rounded-full`}
`;

const ContentWrapper = styled.div`
  ${tw`w-full mr-auto ml-auto`}
`;
const Name = styled.h1`
  ${tw`text-blue-700`}
`;
const Role = styled.div`
  color: black;
  overflow: hidden;
  min-height: 3rem;
  ${tw`text-xs w-11/12  mr-auto ml-auto`}
`;

const Connectionwrapper = styled.div`
  ${tw`w-full mr-auto ml-auto  mt-5 mb-3  `}
`;

const ConnectionContent = styled.div`
  ${tw`flex space-x-2 justify-center `}
`;

const ConnectionImage = styled.img`
  ${tw`rounded-full `}
`;
const ConnectionMessage = styled.p`
  ${tw`text-xs text-black`}
`;
const ButtonWrapper1 = styled.div`
  padding: 8px;
  ${tw` w-10/12 ml-auto mr-auto `};
`;
const ButtonWrapper2 = styled.div`
  padding: 8px;
  margin-top: 3.25rem;
  ${tw` w-10/12 ml-auto mr-auto  `}
`;
export {
  Container,
  CardContainer,
  ImageWrapper,
  BackImage,
  ProfileImage,
  ContentWrapper,
  Name,
  Role,
  ButtonWrapper1,
  ButtonWrapper2,
  Connectionwrapper,
  ConnectionImage,
  ConnectionMessage,
  ConnectionContent,
  ContainerWrapper,
};
