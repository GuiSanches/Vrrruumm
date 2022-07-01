import { FC, useState } from "react";
import { Submit, Content, Input, InputGroup, Label } from "../styles";


export const AddTeam: FC = () => {
    const [constructorRef, setConstructorRef] = useState('');
    const [name, setName] = useState('');
    const [nationality, setNationality] = useState('');
    const [url, setUrl] = useState('');

    return (
        <Content>
            <InputGroup>
                <Label>ConstructorRef:</Label>
                <Input type="text" placeholder="Digite aqui" value={constructorRef} onChange={e => setConstructorRef(e.target.value)}/>
            </InputGroup>

            <InputGroup>
                <Label>Name:</Label>
                <Input type="text" placeholder="Digite aqui" value={name} onChange={e => setName(e.target.value)} />
            </InputGroup>

            <InputGroup>
                <Label>Nationality:</Label>
                <Input type="text" placeholder="Digite aqui" value={nationality} onChange={e => setNationality(e.target.value)} />
            </InputGroup>

            <InputGroup>
                <Label>URL:</Label>
                <Input type="text" placeholder="Digite aqui" value={url} onChange={e => setUrl(e.target.value)} />
            </InputGroup>

            <Submit>Salvar</Submit>

        </Content>
    );
}

export default AddTeam;