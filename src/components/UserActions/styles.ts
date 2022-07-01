import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  border-radius: 4px;
  margin-top: 1em;
  background-color: #ffff;
`;

export const Button = styled.button`
    text-decoration: none;
    border: none;
    display: flex;
    justify-content: center;
    margin: 0 .3em;
    margin-top: 0.4em;
    padding: 0.3em 0;
    background-color: #3e3e3e;
    color: #FFF;
    font-weight: 700;
    font-size: 1.1em;
    line-height: 1.1em;
    border-radius: 4px;

    &:hover {
        cursor: pointer;
        background-color: #f7f7f7;
        color: #3e3e3e;
        transition: .1s all ease-out;
    }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  justify-content: center;
  width: 600px;
  padding: 1em 2em;
  border-radius: 8px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  // border-bottom: 1px solid #adadad;

`;

export const Label = styled.label`
  display: flex;
  font-size: 1em;
  font-weight: 500;
  font-size: 1.1em;
  width: 180px;
  margin-right: 1em;
`;

export const Input = styled.input`
  width: 100%;
  height: 56%;
  color: #adadad;
  border: none;
  // border-radius: 8px;
  // border: 1px solid #adadad;
  border-bottom: 1px solid #adadad;
`;

export const Submit = styled.button`
  display: flex;
  border: none;
  align-self: center;
  border-radius: 8px;
  padding: 0.8em 1.2em;
  background-color: #3e3e3e;
  color: #f7f7f7;
  cursor: pointer;
  font-weight: 700;
  font-size: 1.1em;
  transition: 0.1s all ease-in;
  margin-top: 1em;

  &:hover {
    background-color: #f7f7f7;
    color: #3e3e3e;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  }
`;

