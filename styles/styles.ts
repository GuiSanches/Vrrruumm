import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;
    width: 85%;
`

export const Link = styled.a`
    display: flex;
    text-decoration: none;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    padding: 0.4em 0.6em;
    border-radius: 4px;
    background-color: #FFF;
    width: 85%;
    align-self: center;
    margin-top: 1.2em;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-size: 1.1em;
    cursor: pointer;

    &:hover {
        background-color: #3e3e3e;
        color: #FFF;
        transition: 0.2s all ease-out;
    }
`