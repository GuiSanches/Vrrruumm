import { FC, ReactNode, useState } from "react";
import { UserTypes } from "../../context/@types.App";
import Modal from "../Modal";
import AddPilot from "./AddPilot";
import AddTeam from "./AddTeam";
import ConsultPilot from "./ConsultPilot";
import { Button, Container } from "./styles";

interface ActionContent {
    label: string;
    modal: () => ReactNode
}

type ActionType = {
    [key in UserTypes]: ActionContent[] | null
}

interface Props {
    userType: UserTypes
}

export const UserActions: FC<Props> = ({ userType }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [content, setContent] = useState<ReactNode>(() => <>Olá</>);
    const actions: ActionType = {
        'Admin': [
            {
                label: 'Cadastrar Escuderias',
                modal: () => <AddTeam />

            },
            {
                label: 'Cadastrar Pilotos',
                modal: () => <AddPilot />
            }
        ],
        'Team': [
            {
                label: 'Consultar por Forename',
                modal: () => <ConsultPilot />
            }
        ],
        'Pilot': null
    }

    const handleOpen = (modal: () => ReactNode) => {
        setContent(modal);
        console.log(content)
        setOpen(!open);
    }
    return (
        <Container>
            {actions[userType]!.map((action: ActionContent) =>
                <Button key={action.label} onClick={() => handleOpen(action.modal)}>{action.label}</Button>
            )}
            {open && (
                <Modal 
                    setOpen={setOpen}
                    content={content}
                    idPortal='__next'
                />
            )}
        </Container>
    );
}

export default UserActions;