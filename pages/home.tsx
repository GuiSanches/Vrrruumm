import type { NextPage } from 'next';
import { useContext } from 'react';
import useAuthenticationFlow from '../route/AuthenticationFlow';
import Welcome from '../src/components/Welcome';
import { UserContextType } from '../src/context/@types.App';
import { UserContext } from '../src/context/AppCtx';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    const navigation = useAuthenticationFlow();
    const { user } = useContext(UserContext) as UserContextType;

    const showUserOverView = () => {
        console.log('user', user);
        if (user)
            switch (user.type) {
                case 'Admin':
                    return <>Admin</>;
                case 'Pilot':
                    return <>Pilot</>;
                case 'Team':
                    return <>Team</>;
                default:
                    return <>ola</>;
            }
    }

    return (
        <div className={styles.container}>
            {
                user &&
                <>
                    <Welcome name={user.name} />
                    {/* {showUserOverView()} */}
                </>
            }
        </div>
    );
}

export default Home;
