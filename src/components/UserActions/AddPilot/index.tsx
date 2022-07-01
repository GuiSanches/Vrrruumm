import { FC, useState } from "react";
import { Submit, Content, Input, InputGroup, Label } from "../styles";

export const AddPilot: FC = () => {
    const [driverRef, setDriverRef] = useState('');
    const [number, setNumber] = useState('');
    const [code, setCode] = useState('');
    const [foreName, setForename] = useState('');
    const [surname, setSurname] = useState('');
    const [date, setDate] = useState('');
    const [Nationality, setNationality] = useState('');

    return (
        <Content>
            <InputGroup>
                <Label>DriverRef:</Label>
                <Input type="text" placeholder="Digite aqui" value={driverRef} onChange={e => setDriverRef(e.target.value)}/>
            </InputGroup>

            <InputGroup>
                <Label>Number:</Label>
                <Input type="text" placeholder="Digite aqui" value={number} onChange={e => setNumber(e.target.value)} />
            </InputGroup>

            <InputGroup>
                <Label>Code:</Label>
                <Input type="text" placeholder="Digite aqui" value={code} onChange={e => setCode(e.target.value)} />
            </InputGroup>

            <InputGroup>
                <Label>Forename:</Label>
                <Input type="text" placeholder="Digite aqui" value={foreName} onChange={e => setForename(e.target.value)} />
            </InputGroup>

            <InputGroup>
                <Label>Surname:</Label>
                <Input type="text" placeholder="Digite aqui" value={surname} onChange={e => setSurname(e.target.value)} />
            </InputGroup>

            <InputGroup>
                <Label>Data:</Label>
                <Input type="text" placeholder="Digite aqui" value={date} onChange={e => setDate(e.target.value)} />
            </InputGroup>

            <InputGroup>
                <Label>Nacionalidade:</Label>
                <Input type="text" placeholder="Digite aqui" value={Nationality} onChange={e => setNationality(e.target.value)} />
            </InputGroup>

            <Submit>Salvar</Submit>

        </Content>
    );
}

export default AddPilot;