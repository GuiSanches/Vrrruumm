import type { NextPage } from 'next';
import { useContext, useMemo } from 'react';
import useAuthenticationFlow from '../route/AuthenticationFlow';
import Overview from '../src/components/Overview';
import UserActions from '../src/components/UserActions';
import Welcome from '../src/components/Welcome';
import { Admin, Pilot, Team, UserContextType } from '../src/context/@types.App';
import { UserContext } from '../src/context/AppCtx';
import styles from '../styles/Home.module.css';
import { Container, Link } from '../styles/styles';
import Router from 'next/router';

const Home: NextPage = () => {
    const navigation = useAuthenticationFlow();
    const { user } = useContext(UserContext) as UserContextType;

    const showUserOverView = useMemo(() => {
        console.log('user', user);
        if (user) {
            let overview
            switch (user.type) {
                case 'Admin': {
                    const { name, type, ...rest } = user as Admin;
                    overview = [
                        {
                            label: 'Número de pilotos',
                            content: rest.numberOfPilots
                        },
                        {
                            label: 'Número de corridas',
                            content: rest.numberOfRaces
                        },
                        {
                            label: 'Número de temporadas',
                            content: rest.numberOfSeasons
                        },
                        {
                            label: 'Número de Times',
                            content: rest.numberOfTeams
                        }
                    ]
                }
                    break;
                case 'Pilot': {
                    const { name, type, ...rest } = user as Pilot;
                    overview = [
                        {
                            label: 'Número de vitórias',
                            content: rest.numberOfWins
                        },
                        {
                            label: 'Primeira e última corrida',
                            content: `${rest.firstAndLastYearsOfData[0].toLocaleDateString('pt')} - ${rest.firstAndLastYearsOfData[1].toLocaleDateString('pt')}`
                        },
                    ]
                }
                    break;
                case 'Team': {
                    const { name, type, ...rest } = user as Team;
                    overview = [
                        {
                            label: 'Número de vitórias',
                            content: rest.numberOfWins
                        },
                        {
                            label: 'Primeira e última corrida',
                            content: `${rest.firstAndLastYearsOfData[0].toLocaleDateString('pt')} - ${rest.firstAndLastYearsOfData[1].toLocaleDateString('pt')}`
                        },
                        {
                            label: 'Número de pilotos distintos',
                            content: rest.numberOfDistinctPilots
                        },
                    ]
                }

                default:

            }
            return <Overview overview={overview} />
        }
    }, [user])

    return (
        <div className={styles.container}>
            {
                user &&
                <>
                    <Welcome name={user.name} type={user.type} />
                    <Container>
                        <>
                            {showUserOverView}
                            <UserActions />
                        </>
                    </Container>
                    <Link onClick={() => Router.push('/relatorios')} >Relatórios</Link>
                </>
            }
        </div>
    );
}

export default Home;
