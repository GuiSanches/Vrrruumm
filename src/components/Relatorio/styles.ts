import styled from "styled-components";
import { Item } from "../Overview/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  border: none;
  margin: 0 auto;
  margin-top: 1em;
  color: #FFF;
  font-weight: 900;
  font-size: 1.1em;
  background-color: #3e3e3e;
  cursor: pointer;
  padding: 0.8em 2.4em;
  border-radius: 4px;
  transition: 0.1s all ease-in;

  &:hover {
      background-color: #FFF;
      box-shadow: rgb(38,57,77) 0px 20px 30px -10px;
      color: #3e3e3e;
  }
`;
