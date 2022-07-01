import { FC, useState } from "react";
import { Submit, Content, Input, InputGroup, Label } from "../styles";

export const ConsultPilot: FC = () => {
    const [name, setName] = useState('');

    return (
        <Content>
            <InputGroup>
                <Label>Forename:</Label>
                <Input type="text" placeholder="Digite aqui" value={name} onChange={e => setName(e.target.value)}/>
            </InputGroup>

            <Submit>Buscar</Submit>

        </Content>
    );
}

export default ConsultPilot;