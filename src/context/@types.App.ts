type UserTypes = 'Admin' | 'Team' | 'Pilot'

interface User {
    name: string;
    type: UserTypes;
}

export interface Admin extends User {
    numberOfPilots: number;
    numberOfTeams: number;
    numberOfRaces: number;
    numberOfSeasons: number;
};

export interface Team extends User {
    numberOfWins: number;
    numberOfDistinctPilots: number;
    firstAndLastYearsOfData: [Date, Date]
};

export interface Pilot extends User {
    numberOfWins: number;
    firstAndLastYearsOfData: [Date, Date];
};

export type UserOverview = Admin | Team | Pilot | null;

export type UserContextType = {
    user: UserOverview;
    login: (name: string, password: string) => void;
    logout: () => void;
}