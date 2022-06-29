import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7f7f7;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  background-color: #ffff;
  width: 100%;
  max-width: 600px;
  height: 500px;
  padding: 0;
  marging: 0;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  padding-bottom: 1em;
`;

export const H3 = styled.h3`
  display: block;
  font-family: Poppins-Bold;
  font-size: 30px;
  color: #333;
  line-height: 1.2;
  text-align: center;
  margin-bottom: 3em;
  margin-top: 0.8em;
`;

export const InputWrap = styled.div`
  width: 100%;
  border-bottom: 2px solid #adadad;
  padding-left: 0.3em;
`;

export const Label = styled.label`
  display: block;
  margin-top: 15px;
  font-size: 16px;
  font-weight: 500;
  font-size: 1.1em;
  //   padding-left: 0.3em
`;

export const Input = styled.input`
  width: 100%;
  color: #adadad;
  border: none;
  border-bottom: rgb(38, 57, 77) 0px 20px 30px -10px;
`;

export const Button = styled.button`
  border: none;
  background: #423e36;
  border-radius: 5px;
  color: #fff;
  font-weight: 900;
  font-size: 1.1em;
  align-self: center;
  justify-self: flex-end;
  width: 115px;
  padding: 0.9em 0;
  text-align: center;
  margin-top: 7.5em;
  transition: all 0.1s ease-in;

  &: hover {
    background: #f7f7f7;
    color: #423e36;
    border: 1px solid black;
  }
`;
