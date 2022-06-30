import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    box-shadow: rgb(38,57,77) 0px 20px 30px -10px;
    width: 85%;
    background-color: #FFF;
    border-radius: 5px;
    align-self: center;
    padding: 0.4em 0;
    margin-top: 1em;
`

export const Item = styled.div`
    display: flex;
    flex: 1;
    padding: 0.4em 0;
    margin: 0 0.8em;
    justify-content: center;
    background-color: #3e3e3e;
    color: #f7f7f7;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.1s all ease-in;

    &: hover {
        background-color: #f7f7f7;
        color: #3e3e3e;
    }
`