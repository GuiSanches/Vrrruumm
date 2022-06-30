import { FC } from "react";
import { UserOverview } from "../../context/@types.App"
import Table from "../MaterialTable";
import { Container } from "./styles"

interface Props {
    user: UserOverview;
}

const Relatorio: FC<Props> = ({ user }) => {

    return (
        <Container>
            <Table />
        </Container>
    )
}

export default Relatorio;