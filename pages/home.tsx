import type { NextPage } from "next";
import { useContext, useEffect, useMemo, useState } from "react";
import useAuthenticationFlow from "../route/AuthenticationFlow";
import Overview from "../src/components/Overview";
import UserActions from "../src/components/UserActions";
import Welcome from "../src/components/Welcome";
import { UserContextType } from "../src/context/@types.App";
import { UserContext } from "../src/context/AppCtx";
import styles from "../styles/Home.module.css";
import { Container, Link } from "../styles/styles";
import Router from "next/router";

const Home: NextPage = () => {
  const navigation = useAuthenticationFlow();
  const { user, logout } = useContext(UserContext) as UserContextType;
  const [name, setName] = useState<string>("");
  const [userInfo, setUserInfo] = useState<any>(null);
  const [overview, setOverview] = useState<any>(null);

  useEffect(() => {
    const fetching = async () => {
      await fetch(`http://localhost:8000/api/overview`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((v) => v.json())
        .then((res) => {
          if (user?.tipo === "Administrador") {
            setUserInfo({
              numberOfPilots: res.numberOfPilots[0].qtd_pilotos ?? 0,
              numberOfTeams: res.numberOfTeams[0].qtd_escuderias ?? 0,
              numberOfRaces: res.numberOfRaces[0].qtd_corridas ?? 0,
              numberOfSeasons: res.numberOfSeasons[0].qtd_temporadas ?? 0,
            });
          } else if (user?.tipo === "Piloto") {
            setUserInfo({
              numberOfWins: res.numberOfWins[0].qtd_vitorias ?? 0,
              firstAndLastYearsOfData: `${
                res.firstAndLastYearsOfData[0].prim_ano ?? ""
              }
                    - ${res.firstAndLastYearsOfData[0].ult_ano ?? ""}`,
            });
          } else if (user?.tipo === "Escuderia") {
            setUserInfo({
              numberOfWins: res.numberOfWins[0].qtd_vitorias ?? 0,
              numberOfPilots: res.numberOfPilots[0].qtd_pilotos ?? 0,
              firstAndLastYearsOfData: `${
                res.firstAndLastYearsOfData[0].prim_ano ?? ""
              }
                      - ${res.firstAndLastYearsOfData[0].ult_ano ?? ""}`,
            });
          }
        })
        .catch((err) => console.log(err));

      await fetch(`http://localhost:8000/api/name`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((v) => v.json())
        .then((res) => {
          setName(res.name);
        })
        .catch((err) => console.log(err));
    };
    fetching();
  }, [user]);

  const showUserOverView = useMemo(() => {
    console.log("user", user);
    if (user) {
      switch (user.tipo) {
        case "Administrador":
          {
            setOverview([
              {
                label: "Número de pilotos",
                content: userInfo?.numberOfPilots,
              },
              {
                label: "Número de corridas",
                content: userInfo?.numberOfRaces,
              },
              {
                label: "Número de temporadas",
                content: userInfo?.numberOfSeasons,
              },
              {
                label: "Número de Times",
                content: userInfo?.numberOfTeams,
              },
            ]);
          }
          break;
        case "Piloto":
          {
            setOverview([
              {
                label: "Número de vitórias",
                content: userInfo?.numberOfWins,
              },
              {
                label: "Primeira e última corrida",
                content: userInfo?.firstAndLastYearsOfData,
              },
            ]);
          }
          break;
        case "Escuderia": {
          setOverview([
            {
              label: "Número de vitórias",
              content: userInfo?.numberOfWins,
            },
            {
              label: "Primeira e última corrida",
              content: userInfo?.firstAndLastYearsOfData,
            },
            {
              label: "Número de pilotos distintos",
              content: userInfo?.numberOfPilots,
            },
          ]);
        }

        default:
      }
      return <Overview overview={overview} />;
    }
  }, [userInfo]);

  return (
    <div className={styles.container}>
      {user && (
        <>
          <Welcome name={name} type={user.tipo} logout={logout} />
          <Container>
            <>
              {showUserOverView}
              <UserActions user={user} />
            </>
          </Container>
          <Link onClick={() => Router.push("/relatorios")}>Relatórios</Link>
        </>
      )}
    </div>
  );
};

export default Home;
