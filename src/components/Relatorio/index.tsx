import Router from "next/router";
import { FC, useEffect, useState } from "react";
import { User } from "../../context/@types.App";
import Actions from "../Actions";
import Table from "../MaterialTable";
import { Button, Container } from "./styles";
import getRelatorios from "../../../pages/api/adminRelatorio";

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
      setData(await getRelatorios(user));
    };
    fetching();
    if (user?.tipo === "Administrador") {
      if (relatorio === 1) {
        setColumns(["Status", "Quantidade"]);
        setTitle("Quantidade por Status");
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
