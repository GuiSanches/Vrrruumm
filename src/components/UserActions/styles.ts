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
