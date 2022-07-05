export type UserTypes = "Administrador" | "Escuderia" | "Piloto";

interface Users {
  name: string;
  type: UserTypes;
}

export interface Admin extends Users {
  numberOfPilots: number;
  numberOfTeams: number;
  numberOfRaces: number;
  numberOfSeasons: number;
}

export interface Team extends Users {
  numberOfWins: number;
  numberOfPilots: number;
  firstAndLastYearsOfData: [Date, Date];
}

export interface Pilot extends Users {
  numberOfWins: number;
  firstAndLastYearsOfData: [Date, Date];
}

export type User = {
  user_id: number;
  tipo: UserTypes;
  id_constructor: number;
  id_driver: number;
} | null;

export type UserOverview = Admin | Team | Pilot | null;

export type UserContextType = {
  user: User;
  login: (name: string, password: string) => void;
  logout: () => void;
};
