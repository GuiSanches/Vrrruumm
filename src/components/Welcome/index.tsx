import { FC } from 'react';
import { Container } from './styles';

interface Props {
    name: string;
    type: string;
}

const Welcome: FC<Props> = ({ name, type }) => {

    return (
        <Container>
            Seja bem vinde: {name} - ({type})
        </Container>
    );
}

export default Welcome;
