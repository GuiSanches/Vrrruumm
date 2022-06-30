import { FC } from "react";
import { Button, Container } from "./styles";

export const UserActions : FC = () => {

    return (
        <Container>
            <Button>Cadastrar Escuderia</Button>
            <Button>Cadastrar Pilotos</Button>
        </Container>
    );
}

export default UserActions;