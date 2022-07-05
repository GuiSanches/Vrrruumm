import { FC, ReactNode, useState } from "react";
import { User, UserTypes } from "../../context/@types.App";
import Modal from "../Modal";
import AddPilot from "./AddPilot";
import AddTeam from "./AddTeam";
import ConsultPilot from "./ConsultPilot";
import { Button, Container } from "./styles";

interface ActionContent {
  label: string;
  modal: () => ReactNode;
}

type ActionType = {
  [key in UserTypes]: ActionContent[] | null;
};

interface Props {
  user: User;
}

export const UserActions: FC<Props> = ({ user }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [content, setContent] = useState<ReactNode>(() => <>Olá</>);
  const actions: ActionType = {
    Administrador: [
      {
        label: "Cadastrar Escuderias",
        modal: () => <AddTeam />,
      },
      {
        label: "Cadastrar Pilotos",
        modal: () => <AddPilot />,
      },
    ],
    Escuderia: [
      {
        label: "Consultar por Forename",
        modal: () => <ConsultPilot />,
      },
    ],
    Piloto: null,
  };

  const handleOpen = (modal: () => ReactNode) => {
    setContent(modal);
    console.log(content);
    setOpen(!open);
  };
  return (
    <Container>
      {actions[user?.tipo ?? "Piloto"]?.map((action: ActionContent) => (
        <Button key={action.label} onClick={() => handleOpen(action.modal)}>
          {action.label}
        </Button>
      ))}
      {open && <Modal setOpen={setOpen} content={content} idPortal="__next" />}
    </Container>
  );
};

export default UserActions;
