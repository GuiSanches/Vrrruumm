import Router from "next/router";
import { FC, useEffect, useState } from "react";
import { User } from "../../context/@types.App";
import Actions from "../Actions";
import Table from "../MaterialTable";
import { Button, Container } from "./styles";
import getAdminRelatorio1 from "../../../pages/api/adminRelatorio1";
import getEscuderiaRelatorios from "../../../pages/api/escuderiaRelatorio";
import getPilotoRelatorios from "../../../pages/api/pilotoRelatorio";

interface Props {
  user: User;
}

const Relatorio: FC<Props> = ({ user }) => {
  const [relatorio, setRelatorio] = useState(1);
  const [data, setData] = useState<Array<any>>([]);
  const [columns, setColumns] = useState<Array<string>>([]);
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    const fetching = async () => {
      if (user?.tipo === "Administrador") {
        setData(await getAdminRelatorio1(user));
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
      }
    } else if (user?.tipo === "Escuderia") {
      if (relatorio === 1) {
        setColumns(["Nome", "Vitórias"]);
        setTitle("Pilotos e Vitórias");
      }
      if (relatorio === 2) {
        setColumns(["Status", "Quantidade"]);
        setTitle("Corridas por Status");
      }
    } else if (user?.tipo === "Piloto") {
      if (relatorio === 1) {
        setColumns(["Nome", "Ano", "Vitórias"]);
        setTitle("Corridas");
      }
      if (relatorio === 2) {
        setColumns(["Status", "Quantidade"]);
        setTitle("Corridas por Status");
      }
    }
  }, [relatorio]);
  return (
    <Container>
      <Actions onChange={(r) => setRelatorio(r)} />
      <Table title={title} data={data} columns={columns} />
      <Button onClick={() => Router.back()}>Home</Button>
    </Container>
  );
};

export default Relatorio;
