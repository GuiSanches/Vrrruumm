import { FC, useContext, useState } from "react";
import { UserContextType, User } from "../../../context/@types.App";
import { UserContext } from "../../../context/AppCtx";
import { Submit, Content, Input, InputGroup, Label } from "../styles";

export const AddTeam: FC = () => {
  const { user } = useContext(UserContext) as UserContextType;
  const [constructorRef, setConstructorRef] = useState("");
  const [name, setName] = useState("");
  const [nationality, setNationality] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = () => {
    if (user) {
      console.log(user);
      const userJson: User = {
        user_id: user.user_id,
        id_constructor: user.id_constructor,
        id_driver: user.id_driver,
        tipo: user.tipo,
      };

      const esc = {
        constructor_ref: constructorRef,
        name,
        nationality,
        url,
      };

      console.log(
        JSON.stringify({
          user: userJson,
          esc,
        })
      );

      fetch(`http://localhost:8000/api/escuderias`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: userJson,
          esc,
        }),
      })
        .then(console.log)
        .then(() => alert("Time criado com sucesso"))
        .catch((err) =>
          alert("Não foi possível inserir. Verifique se o time já existe")
        );
    }
  };

  return (
    <Content>
      <InputGroup>
        <Label>ConstructorRef:</Label>
        <Input
          type="text"
          placeholder="Digite aqui"
          value={constructorRef}
          onChange={(e) => setConstructorRef(e.target.value)}
        />
      </InputGroup>

      <InputGroup>
        <Label>Name:</Label>
        <Input
          type="text"
          placeholder="Digite aqui"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </InputGroup>

      <InputGroup>
        <Label>Nationality:</Label>
        <Input
          type="text"
          placeholder="Digite aqui"
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
        />
      </InputGroup>

      <InputGroup>
        <Label>URL:</Label>
        <Input
          type="text"
          placeholder="Digite aqui"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </InputGroup>

      <Submit onClick={handleSubmit}>Salvar</Submit>
    </Content>
  );
};

export default AddTeam;
