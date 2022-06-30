import * as React from 'react';
import { Pilot, Team, UserContextType, UserOverview } from './@types.App';

export const UserContext = React.createContext<UserContextType | null>(null);

type Props = {
    children: React.ReactNode
}

const MOCK_USER : Team = {
    numberOfWins: 0,
    firstAndLastYearsOfData: [new Date(), new Date()],
    type: 'Team',
    name: 'Paula Tejano',
    numberOfDistinctPilots: 0
}

const UserProvider: React.FC<Props> = ({ children }) => {
    const [user, setUser] = React.useState<UserOverview>(null);

    const login = (user: string, password: string) => {
        console.log('logando');
        setUser(MOCK_USER);
    }

    const logout = () => {
        setUser(null);
    }

    return (
        <UserContext.Provider value={{
            user,
            login,
            logout
        }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;