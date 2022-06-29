import { FC, useContext, useState } from "react";
import { UserContextType } from "../../context/@types.App";
import { UserContext } from "../../context/AppCtx";
import { Form, H3, Input, Label, Button, Container, InputWrap } from "./styles";

const LoginForm: FC = () => {
    const { login } = useContext(UserContext) as UserContextType;
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Container>
            <Form>
                <H3>Vrrruumm???</H3>
                <InputWrap>
                    <Label>Login</Label>
                    <Input type="text" placeholder="Nome" id="username" value={name} onChange={e => setName(e.target.value)} />
                </InputWrap>

                <InputWrap>
                    <Label>Senha</Label>
                    <Input type="password" placeholder="Senha" id="password" value={password} onChange={e => setPassword(e.target.value)} />
                </InputWrap>

                <Button type="button" onClick={() => login(name, password)}>Entrar</Button>
            </Form>
        </Container>
    )
}

export default LoginForm;