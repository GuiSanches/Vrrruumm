import Router from "next/router";
import { FC } from "react";
import { User } from "../../context/@types.App";
import Actions from "../Actions";
import Table from "../MaterialTable";
import { Button, Container } from "./styles";

interface Props {
  user: User;
}

const Relatorio: FC<Props> = ({ user }) => {
  return (
    <Container>
      <Actions />
      <Table />
      <Button onClick={() => Router.back()}>Home</Button>
    </Container>
  );
};

export default Relatorio;
