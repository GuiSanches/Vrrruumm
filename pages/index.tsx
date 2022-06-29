import type { NextPage } from 'next';
import useAuthenticationFlow from '../route/AuthenticationFlow';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const navigation = useAuthenticationFlow();

  return (
    <div className={styles.container}>
      <p>Carregando...</p>
    </div>
  );
};

export default Home;
