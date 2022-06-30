import { FC } from "react";
import { Container, Item } from "./styles";


const Actions: FC = () => {
    const actions = ['Relatório 1', 'Relatório 2'];

    return (
        <Container>
            {actions.map(a => <Item key={a}> {a} </Item>)}
        </Container>
    )
}

export default Actions;