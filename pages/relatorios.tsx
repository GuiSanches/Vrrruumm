import { NextPage } from "next";
import { useContext } from "react";
import useAuthenticationFlow from "../route/AuthenticationFlow";
import Relatorio from "../src/components/Relatorio";
import { UserContextType } from "../src/context/@types.App";
import { UserContext } from "../src/context/AppCtx";

const Relatorios : NextPage = () => {
    const navigation = useAuthenticationFlow();
    const {user} = useContext(UserContext) as UserContextType;

    return (
        <Relatorio user={user} />
    )
}

export default Relatorios;