import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    border-radius: 4px;
    margin-top: 1em;
    margin-right: 1em;
    background-color: #ffff;
`

export const Item = styled.div`
    display: flex;
    flex-direction: row;
    paddding: 0.3em 0.7em;
    font-weight: 900;
    font-size: 1.1em;
    margin: 0;
    padding: 1em 0.3em;
    color: #3e3e3e;
    border-bottom: 1px solid grey;

    & span {
        font-weight: 400;
        margin-left: 0.2em;
    }

    &:last-child {
        border: none;
    }
`