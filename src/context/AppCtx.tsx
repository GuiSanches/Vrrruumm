import * as React from "react";
import { Pilot, Team, UserContextType, User } from "./@types.App";

export const UserContext = React.createContext<UserContextType | null>(null);

type Props = {
  children: React.ReactNode;
};

const UserProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = React.useState<User>(null);

  const login = async (user: string, password: string) => {
    await fetch(`http://localhost:8000/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: user, password: password }),
    })
      .then((v) => v.json())
      .then((json) => {
        setUser({
          id_constructor: json[0].idoriginal_constructor ?? 0,
          id_driver: json[0].idoriginal_driver ?? 0,
          tipo: json[0].tipo,
          user_id: json[0].userid,
        });
      })
      .catch((err) => console.log(err));
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
