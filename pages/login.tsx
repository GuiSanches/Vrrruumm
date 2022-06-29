import type { NextPage } from 'next';
import { useContext, useEffect } from 'react';
import useAuthenticationFlow from '../route/AuthenticationFlow';
import AuthenticationFlow from '../route/AuthenticationFlow';
import LoginForm from '../src/components/LoginForm';
import { UserContextType } from '../src/context/@types.App';
import { UserContext } from '../src/context/AppCtx';
import styles from '../styles/Home.module.css';

const Login: NextPage = () => {
  const { login } = useContext(UserContext) as UserContextType;
  const navigation = useAuthenticationFlow();

  return (
    <LoginForm />
  );
}

export default Login;
