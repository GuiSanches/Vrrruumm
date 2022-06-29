import { FC, useContext, useEffect } from "react";
import Home from "../../pages";
import Login from "../../pages/login";
import { UserContextType } from "../../src/context/@types.App";
import { UserContext } from "../../src/context/AppCtx";
import Router from 'next/router';

const useAuthenticationFlow = () => {
    const { user } = useContext(UserContext) as UserContextType;

    useEffect(() => {
        if(user === null) Router.push('/login');
        else Router.push('/home');
    }, [user]);

    return null;
};

export default useAuthenticationFlow;