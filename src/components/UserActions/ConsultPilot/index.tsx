import { FC, useState } from "react";
import { User } from "../../../context/@types.App";
import Table from "../../MaterialTable";
import { Submit, Content, Input, InputGroup, Label } from "../styles";

type props = {
  user: User;
};

export const ConsultPilot: FC<props> = ({ user }) => {
  const [name, setName] = useState("");
  const [data, setData] = useState<Array<any>>([]);

  const search = async () => {
    const aux = name.replace(/\s/g, "");
    if (aux === "") {
      setData([]);
    } else {
      await fetch(
        `http://localhost:8000/api/escuderias/{escuderia}/pilotos?nome=${encodeURI(
          aux
        )}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      )
        .then((v) => v.json())
        .then((res) => {
          setData(
            res.map((v: any) => [
              v.nome,
              new Date(v.nasc).toLocaleString().slice(0, 10).replace(/-/g, "/"),
              v.nacionalidade,
            ])
          );
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <Content>
      <InputGroup>
        <Label>Forename:</Label>
        <Input
          type="text"
          placeholder="Digite aqui"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </InputGroup>
      <Submit onClick={search}>Buscar</Submit>

      {data.length > 0 && (
        <Table
          title="Pilotos"
          columns={["Nome", "Nascimento", "Nascionalidade"]}
          data={data}
        />
      )}
    </Content>
  );
};

export default ConsultPilot;
