import { FC } from "react";
import { UserOverview } from "../../context/@types.App"
import { Container } from "./styles"

interface Props {
    user: UserOverview;
}

const Relatorio: FC<Props> = ({ user }) => {

    return (
        <Container>
            Ola

        </Container>
    )
}

export default Relatorio;