import Router from "next/router";
import { FC, useEffect, useState } from "react";
import { User } from "../../context/@types.App";
import Actions from "../Actions";
import Table from "../MaterialTable";
import { Button, Container, Input, InputWrap, Label } from "./styles";
import getAdminRelatorio1 from "../../../pages/api/adminRelatorio1";
import getEscuderiaRelatorios from "../../../pages/api/escuderiaRelatorio";
import getPilotoRelatorios from "../../../pages/api/pilotoRelatorio";
import getAdminRelatorio2 from "../../../pages/api/adminRelatorio2";

interface Props {
  user: User;
}

const Relatorio: FC<Props> = ({ user }) => {
  const [relatorio, setRelatorio] = useState(1);
  const [city, setCity] = useState<string>("");
  const [data, setData] = useState<Array<any>>([]);
  const [columns, setColumns] = useState<Array<string>>([]);
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    setCity("");
    const fetching = async () => {
      if (user?.tipo === "Administrador") {
        relatorio === 1 ? setData(await getAdminRelatorio1(user)) : setData([]);
      }
      if (user?.tipo === "Escuderia") {
        relatorio === 1
          ? setData(((await getEscuderiaRelatorios(user)) as any).relatorio1)
          : setData(((await getEscuderiaRelatorios(user)) as any).relatorio2);
      }
      if (user?.tipo === "Piloto") {
        relatorio === 1
          ? setData(((await getPilotoRelatorios(user)) as any).relatorio1)
          : setData(((await getPilotoRelatorios(user)) as any).relatorio2);
      }
    };
    fetching();
    if (user?.tipo === "Administrador") {
      if (relatorio === 1) {
        setColumns(["Status", "Quantidade"]);
        setTitle("Corridas por Status");
      } else {
        setColumns([
          "Cidade",
          "IATA",
          "Aeroporto",
          "Cid_Aero",
          "Distancia",
          "Tipo",
        ]);
        setTitle("Aeroportos Próximos");
      }
    } else if (user?.tipo === "Escuderia") {
      if (relatorio === 1) {
        setColumns(["Nome", "Vitórias"]);
        setTitle("Pilotos e Vitórias");
      } else {
        setColumns(["Status", "Quantidade"]);
        setTitle("Corridas por Status");
      }
    } else if (user?.tipo === "Piloto") {
      if (relatorio === 1) {
        setColumns(["Nome", "Ano", "Vitórias"]);
        setTitle("Corridas");
      } else {
        setColumns(["Status", "Quantidade"]);
        setTitle("Corridas por Status");
      }
    }
  }, [relatorio]);

  const searchAero = async () => {
    const aux = city;
    if (aux === "") {
      setData([]);
    } else setData(await getAdminRelatorio2(user, city));
  };

  return (
    <Container>
      <Actions onChange={(r) => setRelatorio(r)} />
      {user?.tipo === "Administrador" && relatorio === 2 && (
        <InputWrap onKeyDown={(e) => e.key === "Enter" && searchAero()}>
          <Label>Cidade</Label>
          <Input
            type="text"
            placeholder="Nome"
            id="username"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </InputWrap>
      )}
      <Table title={title} data={data} columns={columns} />
      <Button onClick={() => Router.back()}>Home</Button>
    </Container>
  );
};

export default Relatorio;
