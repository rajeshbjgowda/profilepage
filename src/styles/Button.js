import styled from "styled-components";
import tw from "twin.macro";

const ButtonStyle = styled.button`
  border: 1px solid blue;
  ${tw` rounded-3xl  w-20 bg-white p-1 focus:outline-none w-full cursor-pointer active:bg-blue-900 hover:bg-blue-700 hover:text-white`}
`;

export { ButtonStyle };
