import { User } from "./../../src/context/@types.App";

export default async function getPilotoRelatorios(user: User) {
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
        relatorio1: res.relatorio_5.map((v: any) => [
          v.nome,
          v.ano,
          v.vitorias,
        ]),
        relatorio2: res.relatorio_6.map((v: any) => [v.status, v.resultados]),
      };
    })
    .catch((err) => console.log(err));
}
