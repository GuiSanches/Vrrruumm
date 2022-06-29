import { FC } from 'react';
import { Container } from './styles';

interface Props {
    name: string;
}

const Welcome: FC<Props> = ({ name }) => {

    return (
        <Container>
            Seja bem vindo: {name}
        </Container>
    );
}

export default Welcome;
