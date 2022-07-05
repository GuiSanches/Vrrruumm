import { FC, useContext, useState } from "react";
import { User, UserContextType } from "../../../context/@types.App";
import { UserContext } from "../../../context/AppCtx";
import { Submit, Content, Input, InputGroup, Label } from "../styles";

export const AddPilot: FC = () => {
    const { user } = useContext(UserContext) as UserContextType;
    const [driverRef, setDriverRef] = useState('');
    const [number, setNumber] = useState('');
    const [code, setCode] = useState('');
    const [foreName, setForename] = useState('');
    const [surname, setSurname] = useState('');
    const [date, setDate] = useState('');
    const [Nationality, setNationality] = useState('');

    const handleSubmit = () => {
        if(user) {
            console.log(user)
            const userJson : User = {
                user_id: user.user_id,
                id_constructor: user.id_constructor,
                id_driver: user.id_driver,
                tipo: user.tipo,    
            }
    
            const pil = {
                driver_ref: driverRef,
                number,
                code,
                forename: foreName,
                surname,
                date_of_birth: date,
                nationality: Nationality    
            }

            console.log(JSON.stringify({
                user: userJson,
                pil
            }))

            fetch(`http://localhost:8000/api/pilotos`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user: userJson,
                    pil
                }),
            }).then(console.log)
            .then(() => alert('Usuário criado com sucesso'))
            .catch((err) => alert('Não foi possível inserir. Verifique se o piloto já existe'));
        }
    }

    return (
        <Content>
            <InputGroup>
                <Label>DriverRef:</Label>
                <Input type="text" placeholder="Digite aqui" value={driverRef} onChange={e => setDriverRef(e.target.value)} />
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

            <Submit onClick={e => handleSubmit()}>Salvar</Submit>

        </Content>
    );
}

export default AddPilot;