import { User } from "../../src/context/@types.App";

export default async function getAdminRelatorio1(user: User) {
  return fetch(`http://localhost:8000/api/relatorios`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((v) => v.json())
    .then((res) => res.relatorio_1.map((v: any) => [v.status, v.resultados]))
    .catch((err) => console.log(err));
}
