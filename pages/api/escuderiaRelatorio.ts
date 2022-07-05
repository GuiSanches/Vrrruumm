import { User } from "./../../src/context/@types.App";

export default async function getEscudeiraRelatorios(user: User) {
  return fetch(`http://localhost:8000/api/relatorios`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((v) => v.json())
    .then((res) => {
      return {
        relatorio1: res.relatorio_3.map((v: any) => [
          `${v.nome} ${v.sobrenome}`,
          v.vitorias,
        ]),
        relatorio2: res.relatorio_4.map((v: any) => [v.status, v.resultados]),
      };
    })
    .catch((err) => console.log(err));
}
